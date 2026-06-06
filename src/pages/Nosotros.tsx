import { Navigate } from 'react-router-dom';
import { ROUTES } from '../data/site';

export default function Nosotros() {
  return <Navigate to={ROUTES.nuestroTrabajo} replace />;
}
