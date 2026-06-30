import tarifasJson from '../../public/data/tarifas.json';

export interface TarifaItem {
  nombre: string;
  detalle: string;
  valor: string;
}

export interface ClubRioNegroItem {
  nombre: string;
  descuento: string;
}

export interface TarifasData {
  tarifas: TarifaItem[];
  promociones: TarifaItem[];
  clubRioNegro: ClubRioNegroItem[];
}

export const DEFAULT_TARIFAS = tarifasJson as TarifasData;

export const TARIFAS_JSON_URL = '/data/tarifas.json';

function isTarifasData(value: unknown): value is TarifasData {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const data = value as TarifasData;
  return (
    Array.isArray(data.tarifas) &&
    Array.isArray(data.promociones) &&
    Array.isArray(data.clubRioNegro)
  );
}

export function parseTarifasData(value: unknown): TarifasData | null {
  if (!isTarifasData(value)) {
    return null;
  }

  return value;
}
