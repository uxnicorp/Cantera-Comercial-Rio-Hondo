import './Footer.css';

function Footer() {
  const whatsappNumber = '5493854762608';
  const whatsappMessage = encodeURIComponent('Hola, necesito información sobre áridos y triturados pétreos');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const mapsLink = 'https://maps.google.com/?q=Canteras+El+Martirizado,+Villa+Río+Hondo,+Santiago+del+Estero';

  return (
    <>
      <section className="pre-footer-cta">
        <div className="cta-container">
          <p className="cta-text">¿Necesitás cotizar materiales o consultar disponibilidad?</p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Contactanos por WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column footer-identity">
            <h3 className="footer-brand-name">Comercial Río Hondo SRL</h3>
            <p className="footer-brand-tagline">Áridos y triturados pétreos</p>
          </div>

          <div className="footer-column footer-contact">
            <h4 className="footer-title">Contacto</h4>
            <ul className="footer-list">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                  </svg>
                  <span>+54 9 3854 76-2608</span>
                </a>
              </li>
              <li>
                <a href="tel:+5493854854799" className="footer-link">
                  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
                  </svg>
                  <span>+54 9 3854 854799</span>
                </a>
              </li>
              <li>
                <a href="mailto:comercialriohondosrl@gmail.com" className="footer-link">
                  <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                  <span>comercialriohondosrl@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-location">
            <h4 className="footer-title">Ubicación</h4>
            <p className="footer-address">
              Canteras El Martirizado<br />
              Villa Río Hondo, Santiago del Estero
            </p>
            <a 
              href={mapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              <svg className="footer-map-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              Ver ubicación
            </a>
          </div>

          <div className="footer-column footer-social">
            <h4 className="footer-title">Redes</h4>
            <a 
              href="https://www.instagram.com/comercial.rio.hondo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg 
                className="footer-social-icon"
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2C6.1 4 4 6.1 4 8.6v6.8C4 17.9 6.1 20 8.6 20h6.8c2.5 0 4.6-2.1 4.6-4.6V8.6C20 6.1 17.9 4 15.4 4H7.6zM17.3 5.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" 
                  fill="currentColor"
                />
              </svg>
              <span>Instagram</span>
            </a>
          </div>

        </div>

        <div className="footer-legal">
          <p>© 2026 Comercial Río Hondo SRL · Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
