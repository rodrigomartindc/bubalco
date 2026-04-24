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
      className="fixed top-20 left-0 right-0 z-[190] bg-accent hover:bg-amber-500 transition-colors h-11 flex items-center justify-center"
    >
      <p className="text-sm font-medium text-white tracking-wide">Donar para apoyar la conservación</p>
    </button>
  );
}
