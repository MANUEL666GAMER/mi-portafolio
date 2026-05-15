import React from 'react';
import * as LucideIcons from 'lucide-react';

const Hero = () => {
  const getIcon = (name) => LucideIcons[name] || LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)] || LucideIcons.Code;
  
  const GithubIcon = getIcon('github');
  const LinkedinIcon = getIcon('linkedin');
  const ArrowIcon = getIcon('arrowRight');

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-20 gap-12">
      <div className="flex-1 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          9° Cuatrimestre • UPQROO
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white">
          Hola, soy <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Manuel Yovani</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-400">
          Desarrollador FullStack en formación
        </h2>
        
        <p className="text-slate-500 max-w-lg text-lg leading-relaxed">
          Estudiante de Ingeniería en Software apasionado por crear soluciones tanto en Frontend como en Backend. No me cierro a ninguna tecnología: si hay algo nuevo que aprender, ahí estaré.
        </p>

        <div className="flex items-center gap-4">
          <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all">
            Mis proyectos <ArrowIcon size={20} />
          </a>
          <a href="https://github.com/MANUEL666GAMER" target="_blank" className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors text-white">
            <GithubIcon size={24} />
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-80 h-80 md:w-[400px] md:h-[400px]">
          <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-full translate-x-4 translate-y-4 animate-pulse"></div>
          <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden border-4 border-slate-700 shadow-2xl">
             {/* Aquí puedes poner tu foto luego */}
             <div className="w-full h-full flex items-center justify-center text-slate-600">
                <LucideIcons.User size={120} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;