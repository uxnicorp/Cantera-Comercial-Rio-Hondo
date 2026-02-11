import './Footer.css';
import logo from '../assets/icon.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-column footer-about">
            <div className="footer-brand-header">
              <img src={logo} alt="Logo Comercial Río Hondo" className="footer-logo" />
              <h3 className="footer-brand-name">Comercial Río Hondo SRL</h3>
            </div>
            <p className="footer-brand-description">
              Líderes en la extracción y comercialización de áridos y triturados pétreos. 
              Calidad garantizada para obras civiles y de infraestructura.
            </p>
            <div className="footer-social">
              <p className="footer-social-text">Seguinos</p>
              <a 
                href="https://www.instagram.com/comercial.rio.hondo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2C6.1 4 4 6.1 4 8.6v6.8C4 17.9 6.1 20 8.6 20h6.8c2.5 0 4.6-2.1 4.6-4.6V8.6C20 6.1 17.9 4 15.4 4H7.6zM17.3 5.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
                </svg>
                <span>@comercial.rio.hondo</span>
              </a>
            </div>
          </div>

          <div className="footer-column footer-nav">
            <h4 className="footer-column-title">Navegación</h4>
            <nav className="footer-nav-list">
              <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }} className="footer-nav-link" style={{ cursor: 'pointer' }}>Inicio</a>
              <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="footer-nav-link" style={{ cursor: 'pointer' }}>Nosotros</a>
              <a href="#productos" onClick={(e) => { e.preventDefault(); scrollToSection('productos'); }} className="footer-nav-link" style={{ cursor: 'pointer' }}>Productos</a>
              <a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }} className="footer-nav-link" style={{ cursor: 'pointer' }}>Galería</a>
              <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }} className="footer-nav-link" style={{ cursor: 'pointer' }}>Contacto</a>
            </nav>
          </div>

          <div className="footer-column footer-products">
            <h4 className="footer-column-title">Productos</h4>
            <ul className="footer-list">
              <li>Piedra 19/38</li>
              <li>Piedra 3/4</li>
              <li>Base 0/38</li>
              <li>Arena de trituración 0/6</li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4 className="footer-column-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                <span>Villa Río Hondo<br />Santiago del Estero</span>
              </li>
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                </svg>
                <a href="https://wa.me/5493854762608" target="_blank" rel="noopener noreferrer">
                  +54 9 3854 76-2608
                </a>
              </li>
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <a href="mailto:comercialriohondosrl@gmail.com">
                  comercialriohondosrl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Comercial Río Hondo SRL. Todos los derechos reservados.
          </p>
          <p className="footer-designer">
            Diseñado por{' '}
            <a 
              href="https://www.uxnicorp.com.ar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="designer-link"
            >
              UXnicorp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
