import React from 'react';
// Importación directa y segura de los iconos
import { Code, Coffee, Smartphone, Terminal, Cpu, Globe, Database } from 'lucide-react';

const skills = [
  { name: "React & TypeScript", icon: Code },
  { name: "Java (Aprendiendo)", icon: Coffee },
  { name: "Dart & Flutter", icon: Smartphone },
  { name: "C# & .NET", icon: Terminal },
  { name: "C++ Base", icon: Cpu },
  { name: "Desarrollo Web", icon: Globe },
  { name: "PHP", icon: Database },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Texto de la Izquierda */}
      <div className="space-y-8">
        <h2 className="text-4xl font-black border-l-4 border-emerald-500 pl-6 text-slate-900 dark:text-white">
          Sobre mí
        </h2>
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          <p>
            Soy estudiante de la <strong className="text-slate-900 dark:text-white">Universidad Politécnica de Quintana Roo</strong>. Actualmente curso el 9no cuatrimestre de la carrera.
          </p>
          <p>
            Mi enfoque es ser un <strong className="text-slate-900 dark:text-white">Desarrollador FullStack</strong>. Me encanta la parte visual del Frontend, pero también disfruto la lógica del Backend. Mi filosofía es la adaptabilidad: no me cierro a ningún lenguaje o herramienta.
          </p>
          <p>
            He trabajado con tecnologías diversas, desde aplicaciones de escritorio en C# hasta interfaces modernas con React y desarrollo móvil con Flutter.
          </p>
        </div>
      </div>

      {/* Tarjeta de Stack Tecnológico (Derecha) */}
      <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 p-10 rounded-[2.5rem] space-y-8 shadow-xl">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Stack Tecnológico</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s, i) => {
            const SkillIcon = s.icon; // Usamos el componente directamente
            return (
              <div 
                key={i} 
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-emerald-600 dark:text-emerald-500">
                  <SkillIcon size={20} />
                </div>
                <span className="font-bold text-sm text-slate-700 dark:text-slate-200">
                  {s.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;