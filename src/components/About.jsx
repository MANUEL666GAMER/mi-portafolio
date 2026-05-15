import React from 'react';
import * as LucideIcons from 'lucide-react';

const skills = [
  { name: "React & TypeScript", icon: "Code" },
  { name: "Java (Aprendiendo)", icon: "Coffee" },
  { name: "Dart & Flutter", icon: "Smartphone" },
  { name: "C# & .NET", icon: "Terminal" },
  { name: "C++ Base", icon: "Cpu" },
  { name: "Desarrollo Web", icon: "Globe" },
  { name: "PHP", icon: "Database" },

];

const About = () => {
  const getIcon = (name) => LucideIcons[name] || LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)] || LucideIcons.Code;

  return (
    <section id="sobre-mi" className="py-20 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl font-black border-l-4 border-emerald-500 pl-6 text-white">Sobre mí</h2>
        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
          <p>
            Soy estudiante de la <strong className="text-white">Universidad Politécnica de Quintana Roo</strong>. Actualmente curso el 9no cuatrimestre de la carrera.
          </p>
          <p>
            Mi enfoque es ser un <strong className="text-white">Desarrollador FullStack</strong>. Me encanta la parte visual del Frontend, pero también disfruto la lógica del Backend. Mi filosofía es la adaptabilidad: no me cierro a ningún lenguaje o herramienta.
          </p>
          <p>
            He trabajado con tecnologías diversas, desde aplicaciones de escritorio en C# hasta interfaces modernas con React y desarrollo móvil con Flutter.
          </p>
        </div>
      </div>

      <div className="bg-[#0f172a] border border-slate-800 p-10 rounded-[2.5rem] space-y-8">
        <h3 className="text-xl font-bold text-white">Stack Tecnológico</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s, i) => {
            const SkillIcon = getIcon(s.icon);
            return (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors">
                <div className="text-emerald-500"><SkillIcon size={20} /></div>
                <span className="font-bold text-sm text-slate-200">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;