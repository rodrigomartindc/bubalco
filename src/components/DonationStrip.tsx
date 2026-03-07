import { useLocation, useNavigate } from 'react-router-dom';

export default function DonationStrip() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToDonations = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('donaciones');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    const el = document.getElementById('donaciones');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-10">
        <p className="text-xs text-white/70">Tu apoyo salva vidas</p>
        <button
          onClick={goToDonations}
          className="text-xs font-medium text-white hover:underline underline-offset-2"
        >
          Donar ahora →
        </button>
      </div>
    </div>
  );
}
