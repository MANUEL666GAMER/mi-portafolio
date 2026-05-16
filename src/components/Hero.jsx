import React from 'react';
import {Download, Code, Briefcase} from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      
      {/* TEXTO (Lado Izquierdo) */}
      <div className="flex-1 text-center md:text-left">
        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
          FullStack Developer
        </span>
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
          Hola, soy <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Manuel Yovani
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Desarrollador de software especializado en crear soluciones web y de escritorio eficientes, con experiencia en bases de datos y arquitecturas sólidas.
        </p>
        
        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a 
            href="#proyectos-personales" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors w-full sm:w-auto text-center"
          >
            Ver mis proyectos
          </a>
          <div className="flex items-center gap-4">
            <a href="https://github.com/MANUEL666GAMER" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl transition-colors">
              <Code size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl transition-colors">
              <Briefcase size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* FOTO (Lado Derecho) */}
      <div className="flex-1 flex justify-center md:justify-end">
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-[#0f172a] shadow-2xl group">
          <img
            src="/MYIMG/YO.jpg"  
            alt="Manuel Yovani Pérez"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 mix-blend-overlay"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;