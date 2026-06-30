import { useEffect, useState } from 'react';
import { DEFAULT_TARIFAS, parseTarifasData, TARIFAS_JSON_URL } from '../data/tarifas';
import { asset } from '../utils/asset';

export function useTarifas() {
  const [data, setData] = useState(DEFAULT_TARIFAS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadTarifas() {
      try {
        const response = await fetch(asset(TARIFAS_JSON_URL), { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`No se pudo cargar tarifas (${response.status})`);
        }

        const json: unknown = await response.json();
        const parsed = parseTarifasData(json);
        if (!parsed) {
          throw new Error('Formato de tarifas.json inválido');
        }

        if (!cancelled) {
          setData(parsed);
          setError(null);
        }
      } catch (loadError) {
        if (!cancelled) {
          const message = loadError instanceof Error ? loadError.message : 'Error al cargar tarifas';
          setError(message);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadTarifas();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, isLoading, error };
}
