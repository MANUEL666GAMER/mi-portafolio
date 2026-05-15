import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Database, 
  Layout, 
  Eye, 
  X, 
  Code, 
  ExternalLink,
  ZoomIn 
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
    demo: "", // Puedes agregar el enlace si lo despliegas
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
    demo: "",
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
    id: "app-cotizacion",
    title: "App de Cotización",
    description: "Aplicación para generar cotizaciones rápidas y genera pdf para compartirlos.",
    tags: ["dart", "flutter","SQLITE"],
    icon: Layout,
    github: "https://github.com/MANUEL666GAMER",
    demo: "",
    screenshots: [
      "/COTIZACION/index.png",
      "/COTIZACION/nueva.png",
      "/COTIZACION/list.png",
      "/COTIZACION/editbunisses.png", 
    ]
  }
];

const PersonalProjects = () => {
  // Estado Nivel 1: Proyecto seleccionado para la galería
  const [selectedProject, setSelectedProject] = useState(null);
  // Estado Nivel 2: Imagen a pantalla completa
  const [selectedImage, setSelectedImage] = useState(null);

  // Bloquear el scroll del body cuando algún modal esté activo
  useEffect(() => {
    if (selectedProject || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, selectedImage]);

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
                className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all shadow-sm dark:shadow-none h-full relative group hover:shadow-md"
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

      {/* MODAL NIVEL 1: GALERÍA DEL PROYECTO */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 dark:bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-[#0f172a] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Fijo */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
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
                  aria-label="Cerrar galería"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Contenido con Scroll */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={`modal-tag-${tag}`} className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-md border border-blue-100 dark:border-blue-900/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid de Capturas */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
                    Capturas de Pantalla ({selectedProject.screenshots.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.screenshots.map((imgUrl, index) => (
                      <div 
                        key={index} 
                        onClick={() => setSelectedImage(imgUrl)}
                        className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-video relative group cursor-zoom-in shadow-sm"
                      >
                        <img 
                          src={imgUrl} 
                          alt={`Captura ${index + 1} de ${selectedProject.title}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn size={24} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL NIVEL 2: LIGHTBOX A PANTALLA COMPLETA */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-6 right-6 p-3 text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 rounded-full transition-colors z-[70] cursor-pointer"
              aria-label="Cerrar vista completa"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Visualización ampliada" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-slate-900"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PersonalProjects;