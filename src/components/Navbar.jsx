import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ dark, setDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg">
        <span className="text-xl font-black tracking-tighter text-gradient">DEV.STUDIO</span>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <a href="#proyectos" className="hover:text-indigo-500 transition-colors">Proyectos</a>
          <a href="#habilidades" className="hover:text-indigo-500 transition-colors">Stack</a>
          <button onClick={() => setDark(!dark)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-500" />}
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;