import React from 'react';
import * as LucideIcons from 'lucide-react';
import avastudioImg from '../assets/avastudio.png';
import AurumbankImg from '../assets/Aurumbank.png';
import FLowersImg from '../assets/Flowers.png';
 // Asegúrate de tener esta imagen en tu carpeta de assets

const projectData = [
  {
    title: "Página Web De estudio de paginas web",
    desc: "Diseño moderno y responsivo para mostrar mi trayectoria en ingeniería de software.",
    tech: ["Html", "CSS", "Js"],
    link: "https://avastudio.com.mx/", // Pon el link de Vercel/Netlify aquí
    github: "https://github.com/MANUEL666GAMER/tu-repo",
    image: avastudioImg // Pon la ruta de tu imagen aquí
  },
  {
    title: "Página Web de banco ficticio",
    desc: "Sitio informativo para un banco ficticio.",
    tech: ["HTML5", "CSS3", "JavaScript, Diseño UI"],
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
  const getIcon = (name) => LucideIcons[name] || LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)] || LucideIcons.Code;
  
  const ExternalIcon = getIcon('externalLink');
  const GithubIcon = getIcon('github');

  return (
    <section id="proyectos" className="py-24 space-y-12">
      <div className="border-l-4 border-emerald-500 pl-6">
        <h2 className="text-4xl font-black text-white">Proyectos Web</h2>
        <p className="text-slate-500 mt-2">Una selección de mis trabajos más recientes en la web.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          <div key={i} className="bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 shadow-xl">
            {/* Contenedor de Imagen con Overlay */}
            <div className="relative h-52 overflow-hidden">
              <img 
                src={project.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                alt={project.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
            </div>

            {/* Contenido */}
            <div className="p-8 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.desc}
              </p>
              
              {/* Etiquetas de Tecnología */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-800 text-slate-300 rounded-lg border border-slate-700">
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
                  <ExternalIcon size={14} /> Ver Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors"
                >
                  <GithubIcon size={18} />
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