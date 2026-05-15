import React from 'react';
import * as LucideIcons from 'lucide-react';

const experienceData = [
  {
    title: "Sistema de Registro de Accesorios",
    desc: "Desarrollo de una solución para el control y registro de accesorios y pertenencias que los empleados ingresan al hotel.",
    tech: ["C#", "Visual Studio"],
    sector: "Sector Hotelero",
    icon: "Hotel"
  },
  {
    title: "Sistema de Registro de Personas de Una Iglesia",
    desc: "Desarrollo de una solución para el control y registro de personas que asisten a la iglesia.",
    tech: ["PHP", "SQLLite"],
    sector: "Sector Religioso",
    icon: "Church"
  }

],





const Experience = () => {
  const getIcon = (name) => LucideIcons[name] || LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)] || LucideIcons.Code;
  const CalendarIcon = getIcon('calendar');

  return (
    <section id="experiencia" className="py-20 flex flex-col md:flex-row gap-12">
      <div className="md:w-1/3 text-white">
        <h2 className="text-4xl font-black border-l-4 border-emerald-500 pl-6">Estancias Académicas</h2>
      </div>
      
      <div className="md:w-2/3">
        <div className="bg-[#0f172a] border border-slate-800 p-8 rounded-[2rem] space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-emerald-400 text-xs font-bold px-3 py-1 bg-emerald-500/10 rounded-full flex items-center gap-2 w-fit mb-4">
                <CalendarIcon size={14} /> Período de Estancias
              </span>
              <h3 className="text-2xl font-bold text-white">{experienceData.map((exp) => exp.title)}</h3>
              <p className="text-slate-400 font-medium italic">Sector Hotelero</p>
            </div>
            <div className="p-3 bg-blue-600/20 text-blue-500 rounded-2xl">
              <LucideIcons.Hotel size={24} />
            </div>
          </div>

          <p className="text-slate-400">
            Desarrollo de una solución para el control y registro de accesorios y pertenencias que los empleados ingresan al hotel.
          </p>

          <ul className="space-y-3 text-slate-400">
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span> 
              Desarrollado en C# utilizando Visual Studio.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span> 
              Implementación de una interfaz intuitiva para el personal de seguridad.
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span> 
              Gestión eficiente de entradas y salidas de equipo.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;