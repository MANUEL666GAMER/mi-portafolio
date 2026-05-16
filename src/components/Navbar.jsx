import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ dark, setDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Agregamos left-0 para evitar que se descuadre al ser fixed
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      {/* Usamos backdrop-blur para el efecto "Glass" nativo de Tailwind */}
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg transition-colors">
        
        {/* Logo */}
        <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">
          DEV.<span className="text-emerald-500">PORT</span>
        </span>

        {/* Menú Desktop (Pantallas grandes) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          <a href="#proyectos" className="hover:text-emerald-500 transition-colors">Proyectos</a>
          <a href="#experiencia" className="hover:text-emerald-500 transition-colors">Experiencia</a>
          <a href="#sobre-mi" className="hover:text-emerald-500 transition-colors">Sobre mí</a>
          <a href="#contacto" className="hover:text-emerald-500 transition-colors">Contacto</a>
          
          <button 
            onClick={() => setDark(!dark)} 
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
          </button>
        </div>

        {/* Botón Menú Mobile (Solo visible en celulares) */}
        <button 
          className="md:hidden text-slate-900 dark:text-white p-1" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Mobile Desplegable (Aparece cuando isOpen es true) */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {/* Agregamos onClick para que el menú se cierre al elegir una opción */}
            <a href="#proyectos" onClick={() => setIsOpen(false)} className="hover:text-emerald-500 transition-colors">Proyectos</a>
            <a href="#experiencia" onClick={() => setIsOpen(false)} className="hover:text-emerald-500 transition-colors">Experiencia</a>
            <a href="#sobre-mi" onClick={() => setIsOpen(false)} className="hover:text-emerald-500 transition-colors">Sobre mí</a>
            <a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-emerald-500 transition-colors">Contacto</a>
          </div>
          
          {/* Botón de Modo Oscuro para celulares */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <span className="text-sm font-bold text-slate-500 dark:text-slate-400">Cambiar tema</span>
            <button 
              onClick={() => {
                setDark(!dark);
                setIsOpen(false); // Cierra el menú tras cambiar el tema
              }} 
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl transition-colors"
            >
              {dark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;