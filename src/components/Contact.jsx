import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    producto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    let mensaje = `Hola! Me contacto desde la web de Comercial Río Hondo.\n\n`;
    mensaje += `*DATOS DE CONTACTO*\n`;
    mensaje += `——————————————\n`;
    mensaje += `Nombre: ${formData.nombre}\n`;
    if (formData.empresa) mensaje += `Empresa: ${formData.empresa}\n`;
    mensaje += `Teléfono: ${formData.telefono}\n`;
    
    if (formData.producto) {
      mensaje += `\n*PRODUCTO DE INTERÉS*\n`;
      mensaje += `——————————————\n`;
      mensaje += `${formData.producto}\n`;
    }
    
    mensaje += `\n*CONSULTA*\n`;
    mensaje += `——————————————\n`;
    mensaje += `${formData.mensaje}`;
    
    const whatsappUrl = `https://wa.me/5493854762608?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
    
    // Resetear formulario
    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      producto: '',
      mensaje: ''
    });
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contacto</h2>
          <p className="contact-subtitle">
            Estamos para ayudarte. Consultá por disponibilidad, precios o visitanos en nuestras instalaciones.
          </p>
        </div>

        <div className="contact-content">
          {/* Formulario - Izquierda */}
          <div className="form-container">
            <div className="form-header">
              <h3 className="form-title">Envianos tu Consulta</h3>
              <p className="form-description">
                Completá el formulario y te responderemos a la brevedad por WhatsApp
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="empresa" className="form-label">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      pattern="[0-9+\s-]+"
                      title="Solo se permiten números, + y espacios"
                      className="form-input"
                      placeholder="+54 9 385 456-7890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="producto" className="form-label">
                      Producto de interés *
                    </label>
                    <select
                      id="producto"
                      name="producto"
                      value={formData.producto}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Seleccionar producto</option>
                      <option value="Piedra 19/38">Piedra 19/38</option>
                      <option value="Piedra 3/4">Piedra 3/4</option>
                      <option value="Base 0/38">Base 0/38</option>
                      <option value="Arena de trituración 0/6">Arena de trituración 0/6</option>
                      <option value="Consulta general">Consulta general</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input form-textarea"
                    placeholder="Contanos sobre tu proyecto, cantidades necesarias, ubicación de obra, etc."
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  <svg className="submit-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                  </svg>
                  Enviar consulta por WhatsApp
                </button>

              <p className="form-note">
                Al enviar, serás redirigido a WhatsApp con tu consulta pre-cargada
              </p>
            </form>
          </div>

          {/* Información + Mapa - Derecha */}
          <div className="contact-info-container">
            <h3 className="info-title">Información de Contacto</h3>
            
            <div className="contact-info-list">
              <div className="info-item-compact">
                <div className="info-icon-compact">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-text-compact">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/5493854762608" target="_blank" rel="noopener noreferrer">
                    +54 9 3854 76-2608
                  </a>
                </div>
              </div>

              <div className="info-item-compact">
                <div className="info-icon-compact">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-text-compact">
                  <h4>Teléfono</h4>
                  <a href="tel:+5493854854799">+54 9 3854 854799</a>
                </div>
              </div>

              <div className="info-item-compact">
                <div className="info-icon-compact">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-text-compact">
                  <h4>Email</h4>
                  <a href="mailto:comercialriohondosrl@gmail.com">
                    comercialriohondosrl@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item-compact">
                <div className="info-icon-compact">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2C6.1 4 4 6.1 4 8.6v6.8C4 17.9 6.1 20 8.6 20h6.8c2.5 0 4.6-2.1 4.6-4.6V8.6C20 6.1 17.9 4 15.4 4H7.6zM17.3 5.5c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-text-compact">
                  <h4>Instagram</h4>
                  <a 
                    href="https://www.instagram.com/comercial.rio.hondo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    @comercial.rio.hondo
                  </a>
                </div>
              </div>

              <div className="info-item-compact">
                <div className="info-icon-compact">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="info-text-compact">
                  <h4>Ubicación</h4>
                  <p>Villa Río Hondo<br />Santiago del Estero</p>
                  <a 
                    href="https://maps.app.goo.gl/gm88EKsWGZMF3Urz8?g_st=iw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-button"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
