import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/icon.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  // efecto scroll para navbar transparente → sólido
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('solid');
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('solid');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar transparent">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollToSection('inicio')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo Comercial Río Hondo" className="navbar-logo" />
          <div className="brand-text">
            <h1>COMERCIAL RÍO HONDO</h1>
            <span className="navbar-tagline">ÁRIDOS · CONSTRUCCIÓN · INFRAESTRUCTURA</span>
          </div>
        </div>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a onClick={() => scrollToSection('inicio')}>Inicio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('nosotros')}>Nosotros</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('productos')}>Productos</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('galeria')}>Galería</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contacto')} className="nav-cta">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
