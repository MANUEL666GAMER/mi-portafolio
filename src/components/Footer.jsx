import React from 'react';
// Importamos los íconos directamente. Usamos Code y Briefcase en lugar de Github/Linkedin
import { Code, Briefcase, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Marca */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-2xl font-black text-slate-900 dark:text-white">
            <Code2 className="text-emerald-600 dark:text-emerald-500" />
            <span>dev.port</span>
          </div>
          <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed max-w-xs">
            Portafolio digital diseñado para destacar proyectos, experiencia y habilidades en el mundo del desarrollo de software.
          </p>
          <div className="flex gap-4 text-slate-500 dark:text-slate-400">
            {/* Redes Sociales usando Code y Briefcase */}
            <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Code size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Briefcase size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="space-y-6">
          <h4 className="font-bold text-slate-900 dark:text-white">Navegación</h4>
          <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#proyectos" className="hover:text-slate-900 dark:hover:text-white transition-colors">Proyectos</a></li>
            <li><a href="#experiencia" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experiencia</a></li>
            <li><a href="#sobre-mi" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sobre mí</a></li>
            <li><a href="#contacto" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto rápido */}
        <div className="space-y-6 text-slate-600 dark:text-slate-500 text-sm">
          <h4 className="font-bold text-slate-900 dark:text-white">Contáctame</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Disponible para nuevas oportunidades
            </li>
            <li>manuelyovaniperez@gmail.com</li>
            <li>Cancún, Quintana Roo</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800/50 gap-4">
        <p className="text-slate-500 text-xs">© 2026 Manuel Perez. Todos los derechos reservados.</p>
        <p className="text-slate-500 text-xs flex items-center gap-1">
          Hecho con <Heart size={12} className="text-emerald-500 fill-emerald-500" /> y React
        </p>
      </div>
    </footer>
  );
};

export default Footer;