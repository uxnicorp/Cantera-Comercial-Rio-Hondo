import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Piedra 19/38',
      description: 'Árido grueso utilizado principalmente en la elaboración de hormigón de gran volumen, donde se requiere resistencia y estabilidad estructural.',
      applications: [
        'Hormigón de gran volumen',
        'Obras de mayor exigencia',
        'Estructuras que requieren alta resistencia'
      ],
      imageText: 'Material resistente y confiable, utilizado en hormigón de gran volumen y obras de mayor exigencia.'
    },
    {
      id: 2,
      name: 'Piedra 3/4',
      description: 'Árido indicado para hormigón de menor volumen, ideal para obras civiles y proyectos donde se necesita una granulometría más controlada.',
      applications: [
        'Hormigón de menor volumen',
        'Obras civiles',
        'Proyectos con granulometría controlada'
      ],
      imageText: 'Ideal para construcción civil y proyectos que demandan control granulométrico preciso.'
    },
    {
      id: 3,
      name: 'Base 0/38',
      description: 'Material compuesto por áridos con contenido arcilloso, especialmente utilizado en la construcción y mejoramiento de caminos, accesos y trabajos de compactación.',
      applications: [
        'Construcción y mejoramiento de caminos',
        'Accesos vehiculares',
        'Trabajos de compactación',
        'Bases de caminos rurales'
      ],
      imageText: 'Se destaca por su composición arcillosa y característico color rojizo, que mejora notablemente la compactación y durabilidad del terreno.'
    },
    {
      id: 4,
      name: 'Arena de trituración 0/6',
      description: 'Árido fino apto para la fabricación de placas y bloques, así como para su uso en mezclas asfálticas y tareas de corrección y mejoramiento de caminos.',
      applications: [
        'Fabricación de placas y bloques',
        'Mezclas asfálticas',
        'Corrector y mejorador de caminos',
        'Insumo para construcción civil'
      ],
      imageText: 'Utilizada como corrector y mejorador de caminos, y como insumo clave en la fabricación de placas, bloques y mezclas asfálticas.'
    }
  ];

  return (
    <section className="products" id="productos">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Productos y Servicios</h2>
          <p className="products-subtitle">
            Materiales pétreos de calidad para construcción, vialidad e infraestructura. 
            Producción propia desde nuestras canteras en Villa Río Hondo.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-placeholder">
                <div className="placeholder-overlay"></div>
              </div>
              
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-applications">
                  <h4 className="product-applications-title">Aplicaciones:</h4>
                  <ul className="product-applications-list">
                    {product.applications.map((app, index) => (
                      <li key={index}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="products-footer">
          <div className="products-cta">
            <h3 className="products-cta-title">¿Necesitás cotizar o consultar disponibilidad?</h3>
            <p className="products-cta-text">
              Precios vigentes disponibles a consulta. Contamos con stock permanente y entregas en obra.
            </p>
            <div className="products-cta-buttons">
              <a 
                href="https://wa.me/5493854762608?text=Hola,%20necesito%20consultar%20precios%20y%20disponibilidad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="products-cta-button primary"
              >
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
                </svg>
                Consultar precios
              </a>
              <a 
                href="tel:+5493854762608"
                className="products-cta-button secondary"
              >
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor"/>
                </svg>
                Llamar ahora
              </a>
            </div>
          </div>
        </div>

        <div className="products-info">
          <div className="info-grid">
            <div className="info-item">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" fill="currentColor"/>
              </svg>
              <h4>Stock Permanente</h4>
              <p>Disponibilidad inmediata de materiales para obra</p>
            </div>
            
            <div className="info-item">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" fill="currentColor"/>
              </svg>
              <h4>Producción Propia</h4>
              <p>Extracción directa desde nuestras canteras</p>
            </div>
            
            <div className="info-item">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
              <h4>Calidad Garantizada</h4>
              <p>Materiales que cumplen especificaciones técnicas</p>
            </div>
            
            <div className="info-item">
              <svg className="info-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/>
              </svg>
              <h4>Volúmenes Flexibles</h4>
              <p>Desde cargas completas hasta obras mayores</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
