import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

type VerifyResponse =
  | { ok: true; status?: string | null; payer_email?: string | null; transaction_amount?: number | null; currency_id?: string | null }
  | { ok: false; error: string };

export default function Gracias() {
  const [searchParams] = useSearchParams();
  const [verify, setVerify] = useState<VerifyResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const paymentId = useMemo(() => {
    return (
      searchParams.get('payment_id') ||
      searchParams.get('collection_id') ||
      searchParams.get('id') ||
      ''
    );
  }, [searchParams]);

  const statusHint = useMemo(() => {
    return (
      searchParams.get('status') ||
      searchParams.get('collection_status') ||
      searchParams.get('payment_status') ||
      ''
    );
  }, [searchParams]);

  useEffect(() => {
    let isMounted = true;
    if (!paymentId) return;

    const run = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/mp/verify_payment.php?payment_id=${encodeURIComponent(paymentId)}`);
        const json = (await res.json()) as VerifyResponse;
        if (!isMounted) return;
        setVerify(json);
      } catch {
        if (!isMounted) return;
        setVerify({ ok: false, error: 'No se pudo verificar el estado del pago todavía.' });
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    };

    void run();
    return () => {
      isMounted = false;
    };
  }, [paymentId]);

  const finalStatus = verify && verify.ok ? verify.status ?? '' : '';
  const showApproved = finalStatus === 'approved' || statusHint === 'approved';

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">
            {showApproved ? '¡Gracias por tu donación!' : '¡Gracias!'}
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {showApproved
              ? 'Tu aporte nos ayuda a seguir rescatando y cuidando animales.'
              : 'Estamos procesando el estado del pago. Si recién terminaste el checkout, puede tardar unos segundos.'}
          </p>

          {paymentId && (
            <div className="mt-6 rounded-2xl bg-white p-5 border border-emerald-100">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Referencia de pago:</span> {paymentId}
              </p>

              {isLoading && (
                <p className="mt-3 text-sm text-gray-600">Verificando estado…</p>
              )}

              {!isLoading && verify && verify.ok && (
                <div className="mt-3 text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">Estado:</span> {verify.status ?? '—'}
                  </p>
                  {typeof verify.transaction_amount === 'number' && (
                    <p>
                      <span className="font-semibold">Monto:</span> {verify.transaction_amount} {verify.currency_id ?? ''}
                    </p>
                  )}
                </div>
              )}

              {!isLoading && verify && !verify.ok && (
                <p className="mt-3 text-sm text-amber-700">{verify.error}</p>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-colors"
            >
              Volver al inicio
            </Link>
            <Link
              to="/#donaciones"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 font-bold rounded-2xl border border-emerald-200 hover:bg-emerald-50 transition-colors"
            >
              Ver donaciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


