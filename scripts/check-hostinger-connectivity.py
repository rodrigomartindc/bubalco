#!/usr/bin/env python3
"""TCP connectivity check with retries for flaky Hostinger SSH endpoints."""

from __future__ import annotations

import concurrent.futures
import os
import socket
import sys
import time


def resolve_host(host: str, port: int, timeout: float) -> tuple:
    with concurrent.futures.ThreadPoolExecutor(max_workers=1) as pool:
        future = pool.submit(socket.getaddrinfo, host, port, socket.AF_INET, socket.SOCK_STREAM)
        try:
            addrs = future.result(timeout=timeout)
        except concurrent.futures.TimeoutError as error:
            raise OSError(f"DNS resolution timed out after {timeout:g}s") from error

    _, _, _, _, sockaddr = addrs[0]
    return sockaddr


def connect(host: str, port: int, timeout: float) -> None:
    sockaddr = resolve_host(host, port, timeout)
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(timeout)
        sock.connect(sockaddr)


def main() -> int:
    host = os.environ.get("HOSTINGER_HOST", "").strip()
    port_raw = os.environ.get("HOSTINGER_PORT", "").strip()
    if not host or not port_raw:
        print("Missing HOSTINGER_HOST or HOSTINGER_PORT")
        return 1

    port = int(port_raw)
    max_attempts = int(os.environ.get("CONNECT_MAX_ATTEMPTS", "4"))
    timeout = float(os.environ.get("CONNECT_TIMEOUT_SECONDS", "10"))
    initial_delay = float(os.environ.get("CONNECT_RETRY_DELAY_SECONDS", "8"))
    max_delay = float(os.environ.get("CONNECT_RETRY_MAX_DELAY_SECONDS", "20"))
    max_seconds = float(os.environ.get("CONNECT_MAX_SECONDS", "60"))

    started = time.monotonic()
    delay = initial_delay

    for attempt in range(1, max_attempts + 1):
        elapsed = time.monotonic() - started
        remaining = max_seconds - elapsed
        if remaining <= 0:
            print(f"CONNECT_BUDGET_EXCEEDED after {elapsed:.0f}s (limit {max_seconds:.0f}s)")
            return 1

        attempt_timeout = min(timeout, remaining)
        print(
            f"Connectivity attempt {attempt}/{max_attempts} -> {host}:{port} "
            f"(timeout {attempt_timeout:g}s, budget left {remaining:.0f}s)"
        )

        try:
            connect(host, port, attempt_timeout)
        except OSError as error:
            print(f"CONNECT_FAIL: {type(error).__name__}: {error}")
            if attempt >= max_attempts:
                break

            elapsed = time.monotonic() - started
            remaining = max_seconds - elapsed
            if remaining <= 0:
                print(f"CONNECT_BUDGET_EXCEEDED after {elapsed:.0f}s (limit {max_seconds:.0f}s)")
                return 1

            wait = min(delay, remaining)
            print(f"Waiting {wait:.0f}s before retry...")
            time.sleep(wait)
            delay = min(delay * 1.5, max_delay)
        else:
            print(f"CONNECT_OK in {time.monotonic() - started:.1f}s")
            return 0

    print(f"All {max_attempts} connectivity attempts failed in {time.monotonic() - started:.1f}s")
    return 1


if __name__ == "__main__":
    sys.exit(main())
