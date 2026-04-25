import { useLocation, useNavigate } from 'react-router-dom';

export default function DonationStrip() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToDonations = () => {
    if (location.pathname === '/donaciones') return;
    navigate('/donaciones');
  };

  return (
    <button
      onClick={goToDonations}
      className="fixed top-20 left-0 right-0 z-[190] bg-accent hover:bg-amber-500 transition-colors h-11 flex items-center justify-center cursor-pointer"
    >
      <span className="text-sm font-medium text-white tracking-wide border border-white/40 rounded-full px-5 py-1 hover:bg-white/10 transition-colors">Donar para apoyar la conservación</span>
    </button>
  );
}
