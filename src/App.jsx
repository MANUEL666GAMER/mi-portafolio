import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import PersonalProjects from './components/PersonalProjects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // 1. Estado para controlar el modo oscuro
  const [dark, setDark] = useState(false);

  // 2. Efecto para aplicar/quitar la clase 'dark' a la etiqueta <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    // 3. Contenedor principal para toda la pantalla (maneja los colores de fondo generales)
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#030712] dark:text-white transition-colors duration-300">
      
      {/* Tu contenedor original que centra el contenido */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 4. Le pasamos las variables al Navbar para que el botón funcione */}
        <Navbar dark={dark} setDark={setDark} />
        
        <main>
          <Hero />
          <Projects />
          <PersonalProjects />
          <Experience />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App;