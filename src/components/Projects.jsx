import React from 'react';
// Cambiamos la importación dinámica por importaciones directas y seguras para evitar errores al subir la página
import { ExternalLink, Code } from 'lucide-react'; 

import avastudioImg from '../assets/avaStudio.png';
import AurumbankImg from '../assets/Aurumbank.png';
import FLowersImg from '../assets/Flowers.png';

const projectData = [
  {
    title: "Página Web De estudio de páginas web",
    desc: "Diseño moderno y responsivo para mostrar mi trayectoria en ingeniería de software.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://avastudio.com.mx/", 
    github: "https://github.com/MANUEL666GAMER/tu-repo",
    image: avastudioImg 
  },
  {
    title: "Página Web de banco ficticio",
    desc: "Sitio informativo para un banco ficticio.",
    tech: ["HTML5", "CSS3", "JavaScript", "Diseño UI"],
    link: "https://aurumbank.onrender.com/",
    github: "https://github.com/MANUEL666GAMER",
    image: AurumbankImg
  },
  {
    title: "Flores",
    desc: "Muestra visual de flores.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://flowersforyou-pzfn.onrender.com/",
    github: "https://github.com/MANUEL666GAMER",
    image: FLowersImg
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 space-y-12">
      <div className="border-l-4 border-emerald-500 pl-6">
        {/* Cambiamos a texto oscuro por defecto y blanco en modo dark */}
        <h2 className="text-4xl font-black text-slate-900 dark:text-white">Proyectos Web</h2>
        <p className="text-slate-600 dark:text-slate-500 mt-2">Una selección de mis trabajos más recientes en la web.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          // Fondo blanco por defecto, fondo oscuro en dark mode. Bordes adaptables.
          <div key={i} className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 shadow-xl">
            
            {/* Contenedor de Imagen con Overlay adaptable */}
            <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-[#0f172a]">
              <img 
                src={project.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={project.title} 
              />
              {/* El gradiente ahora se adapta para fundirse con el blanco o el azul oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f172a] to-transparent opacity-90 dark:opacity-60"></div>
            </div>

            {/* Contenido */}
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {project.desc}
              </p>
              
              {/* Etiquetas de Tecnología adaptables */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              {/* Botones de Acción */}
              <div className="flex gap-3 pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-900/20"
                >
                  <ExternalLink size={14} /> Ver Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-white rounded-xl transition-colors"
                >
                  <Code size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;