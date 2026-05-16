import React from 'react';
// Importamos los iconos de forma directa y segura
import { Calendar, Hotel, Church, Check } from 'lucide-react';

const experienceData = [
  {
    title: "Sistema de Registro de Accesorios",
    desc: "Desarrollo de una solución para el control y registro de accesorios y pertenencias que los empleados ingresan al hotel.",
    tech: ["C#", "Visual Studio", "Gestión de Seguridad"],
    sector: "Sector Hotelero",
    // Pasamos el componente del icono directamente
    icon: Hotel 
  },
  {
    title: "Registro de Personas (Iglesia)",
    desc: "Desarrollo de una solución integral para el control y registro de asistentes a la congregación.",
    tech: ["PHP", "SQLite", "Gestión de Datos"],
    sector: "Sector Religioso",
    icon: Church
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 flex flex-col md:flex-row gap-12">
      
      {/* Título de la sección */}
      <div className="md:w-1/3 text-slate-900 dark:text-white">
        <h2 className="text-4xl font-black border-l-4 border-emerald-500 pl-6 tracking-tight">
          Estancias <br /> 
          <span className="text-slate-600 dark:text-slate-500">Académicas</span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-500 text-sm">
          Proyectos desarrollados durante mi formación profesional.
        </p>
      </div>
      
      {/* Lista de Experiencias */}
      <div className="md:w-2/3 space-y-8">
        {experienceData.map((exp, index) => {
          const ProjectIcon = exp.icon;
          
          return (
            // Fondo blanco en modo claro, oscuro en modo noche
            <div key={index} className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] space-y-6 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
              
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-black px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center gap-2 w-fit uppercase tracking-wider">
                    <Calendar size={12} /> Proyecto de Estancia
                  </span>
                  
                  {/* Título adaptable */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-500 font-bold text-xs uppercase tracking-widest">
                    {exp.sector}
                  </p>
                </div>
                
                {/* Caja del ícono principal */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 text-blue-600 dark:text-blue-500 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <ProjectIcon size={28} />
                </div>
              </div>

              {/* Descripción */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {exp.desc}
              </p>

              {/* Tecnologías usadas */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              {/* Puntos clave */}
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800/50 pt-4">
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-emerald-500 font-bold shrink-0 mt-0.5" /> 
                  Resolución de problemas mediante lógica de programación.
                </li>
                <li className="flex gap-2 items-start">
                  <Check size={16} className="text-emerald-500 font-bold shrink-0 mt-0.5" /> 
                  Diseño de base de datos eficiente para el registro.
                </li>
              </ul>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;