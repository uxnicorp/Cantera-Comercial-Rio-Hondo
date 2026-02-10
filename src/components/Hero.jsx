import React from "react";
import heroImg from "../assets/hero-cantera.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">
        <h1>Soluciones en áridos para la construcción</h1>
        <p>
          Calidad, logística y experiencia para obras civiles y de
          infraestructura
        </p>
      </div>
    </section>
  );
}
