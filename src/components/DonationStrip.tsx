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
      className="fixed top-20 left-0 right-0 z-[190] bg-amber-700 hover:bg-amber-800 transition-colors h-11 flex items-center justify-center cursor-pointer"
    >
      <span className="text-sm font-medium text-white tracking-wide border border-white/50 rounded-full px-5 py-1">Donar para apoyar la conservación</span>
    </button>
  );
}
