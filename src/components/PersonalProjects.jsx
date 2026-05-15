import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Database, 
  Layout, 
  Eye, 
  X, 
  Code, 
  ExternalLink 
} from 'lucide-react';

// --- TUS DATOS REALES ---
const personalProjects = [
  {
    id: "gym-pos",
    title: "POS & Gestión de Gimnasio",
    description: "Sistema integral para la administración de socios, control de acceso mediante NIP automatizado y gestión de pagos. Implementa una arquitectura robusta con transacciones seguras y contenedores para despliegue inmediato.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    icon: Monitor,
    github: "https://github.com/MANUEL666GAMER",
    // Imágenes placeholder (puedes cambiarlas luego por tus propias capturas)
    screenshots: [
        "/POSGYM/login.png",
      "/POSGYM/incio.png",
      "/POSGYM/dashboard.png",
      "/POSGYM/client.png",
      "/POSGYM/sales.png",
      "/POSGYM/reporte.png"      
    ]
  },
  {
    id: "inventory-system",
    title: "Sistema de Inventario",
    description: "Herramienta creada para el control de entradas y salidas de mercancía con reportes detallados. Enfocado en optimizar la organización y aplicar programación orientada a objetos.",
    tags: ["PHP", "MVC", "MySQL","Css"],
    icon: Database,
    github: "https://github.com/MANUEL666GAMER",
    screenshots: [
      "/INVENTARIO/login.png",
      "/INVENTARIO/home.png",
      "/INVENTARIO/listusuarioss.png",
      "/INVENTARIO/catgories.png",
      "/INVENTARIO/producst.png",
      "/INVENTARIO/users.png",
    ]
  },
  {
    id: "App Cotizacion",
    title: "App de Cotización",
    description: "Aplicación para generar cotizaciones rápidas y genera pdf para compartirlos.",
    tags: ["dart", "flutter","SQLITE"],
    icon: Layout,
    github: "https://github.com/MANUEL666GAMER",
    screenshots: [
      "https://images.unsplash.com/photo-1507238692062-2a042f7e37e5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    ]
  }
];

const PersonalProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Bloquear el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="proyectos-personales" className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        {/* ENCABEZADO */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Proyectos Personales</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4 mb-4"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg text-sm lg:text-right leading-relaxed">
            Desarrollos, experimentos y herramientas que he creado en mi tiempo libre para explorar nuevas tecnologías y resolver problemas cotidianos.
          </p>
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project) => {
            const Icon = project.icon;
            
            return (
              <div 
                key={project.id} 
                className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none h-full relative group"
              >
                {/* Cabecera de la Tarjeta */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  
                  {/* Botón de Galería */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    aria-label={`Ver galería de ${project.title}`}
                  >
                    <Eye size={14} />
                    Galería
                  </button>
                </div>

                {/* Contenido */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 mt-6 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[11px] font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlaces Footer */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 flex gap-6 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-bold">
                      <Code size={16} /> Código
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-bold">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL DE GALERÍA (Framer Motion) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-[#0f172a] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()} // Evita que al hacer clic dentro se cierre
            >
              {/* Modal Header (Fijo) */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                    <selectedProject.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 overflow-y-auto">
                <div className="mb-8">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={`modal-tag-${tag}`} className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md border border-blue-100 dark:border-blue-900/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid de Capturas */}
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                  Galería del Proyecto
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.screenshots.map((imgUrl, index) => (
                    <div 
                      key={index} 
                      className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-video relative group"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Captura ${index + 1} de ${selectedProject.title}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PersonalProjects;