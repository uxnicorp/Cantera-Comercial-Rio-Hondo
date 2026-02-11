import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <QuienesSomos />
        <Products />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
