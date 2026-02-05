import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tarifas from './pages/Tarifas';
import Horarios from './pages/Horarios';
import Volunteering from './components/Volunteering';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/voluntariado" element={
            <div className="pt-20">
              <Volunteering />
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
