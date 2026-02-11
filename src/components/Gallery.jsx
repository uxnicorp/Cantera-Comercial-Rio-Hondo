import { useState, useRef } from 'react';
import './Gallery.css';

// Importar imágenes
import img1 from '../assets/material-clasificado.jpeg';
import img2 from '../assets/material-calidad.jpeg';
import img3 from '../assets/stock-piedra.jpeg';
import img4 from '../assets/materiales-listos.jpeg';

// Importar videos
import video1 from '../assets/cantera-operacion.mp4';
import video2 from '../assets/maquinaria-pesada.mp4';
import video3 from '../assets/produccion-continua.mp4';

function Gallery() {
  const [playingVideos, setPlayingVideos] = useState({});
  const videoRefs = useRef({});

  const handleVideoPlay = (videoId) => {
    // Pausar todos los demás videos
    Object.keys(videoRefs.current).forEach(id => {
      if (id !== videoId.toString() && videoRefs.current[id]) {
        videoRefs.current[id].pause();
      }
    });
    // Marcar este como reproduciendo y otros como no
    setPlayingVideos({ [videoId]: true });
  };
  const galleryItems = [
    {
      id: 1,
      type: 'video',
      src: video1,
      alt: 'Cantera en operación',
      title: 'Operación Continua',
      description: 'Trabajo constante para garantizar stock permanente',
      featured: true
    },
    {
      id: 2,
      type: 'image',
      src: img2,
      alt: 'Material pétreo de calidad',
      title: 'Materiales Premium',
      description: 'Áridos clasificados según normas de calidad'
    },
    {
      id: 3,
      type: 'image',
      src: img1,
      alt: 'Material clasificado',
      title: 'Material Clasificado',
      description: 'Áridos organizados según granulometría y uso'
    },
    {
      id: 4,
      type: 'image',
      src: img3,
      alt: 'Stock de piedra',
      title: 'Gran Capacidad',
      description: 'Disponibilidad inmediata para entregas en obra'
    },
    {
      id: 5,
      type: 'video',
      src: video2,
      alt: 'Maquinaria en operación',
      title: 'Equipamiento Pesado',
      description: 'Tecnología para procesos de alta eficiencia',
      featured: true
    },
    {
      id: 6,
      type: 'image',
      src: img4,
      alt: 'Materiales listos',
      title: 'Calidad Garantizada',
      description: 'Productos que cumplen estándares de construcción'
    }
  ];

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Nuestra Cantera en Acción</h2>
          <p className="gallery-subtitle">
            Conocé nuestras instalaciones, procesos de producción y la calidad de nuestros materiales. 
            Operamos con tecnología moderna para garantizar los mejores estándares.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article key={item.id} className={`gallery-item ${item.featured ? 'featured' : ''}`}>
              <div className="gallery-media">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="gallery-image"
                    loading="lazy"
                  />
                ) : (
                  <>
                    <video 
                      ref={(el) => videoRefs.current[item.id] = el}
                      src={item.src}
                      className="gallery-video"
                      preload="metadata"
                      loop
                      onClick={(e) => {
                        if (e.target.paused) {
                          e.target.play();
                          handleVideoPlay(item.id);
                        } else {
                          e.target.pause();
                          setPlayingVideos(prev => ({ ...prev, [item.id]: false }));
                        }
                      }}
                    >
                      Tu navegador no soporta videos HTML5.
                    </video>
                    {!playingVideos[item.id] && (
                      <div className="play-icon" onClick={(e) => {
                        e.preventDefault();
                        const video = videoRefs.current[item.id];
                        if (video) {
                          video.play();
                          handleVideoPlay(item.id);
                        }
                      }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    )}
                  </>
                )}
                <div className="gallery-content">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-description">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
