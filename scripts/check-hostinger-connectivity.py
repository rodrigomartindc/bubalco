#!/usr/bin/env python3
"""TCP connectivity check with retries for flaky Hostinger SSH endpoints."""

from __future__ import annotations

import os
import socket
import sys
import time


def connect(host: str, port: int, timeout: float) -> None:
    addrs = socket.getaddrinfo(host, port, socket.AF_INET, socket.SOCK_STREAM)
    _, _, _, _, sockaddr = addrs[0]
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
    max_attempts = int(os.environ.get("CONNECT_MAX_ATTEMPTS", "8"))
    timeout = float(os.environ.get("CONNECT_TIMEOUT_SECONDS", "25"))
    initial_delay = float(os.environ.get("CONNECT_RETRY_DELAY_SECONDS", "15"))
    max_delay = float(os.environ.get("CONNECT_RETRY_MAX_DELAY_SECONDS", "90"))

    delay = initial_delay
    for attempt in range(1, max_attempts + 1):
        print(f"Connectivity attempt {attempt}/{max_attempts} -> {host}:{port} (timeout {timeout:g}s)")
        try:
            connect(host, port, timeout)
        except OSError as error:
            print(f"CONNECT_FAIL: {type(error).__name__}: {error}")
            if attempt >= max_attempts:
                break
            print(f"Waiting {delay:.0f}s before retry...")
            time.sleep(delay)
            delay = min(delay * 1.5, max_delay)
        else:
            print("CONNECT_OK")
            return 0

    print(f"All {max_attempts} connectivity attempts failed")
    return 1


if __name__ == "__main__":
    sys.exit(main())
