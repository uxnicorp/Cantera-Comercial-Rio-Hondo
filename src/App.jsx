import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <QuienesSomos />
      </main>

      <Footer />
    </div>
  );
}

export default App;
