import React, { useRef, useState } from 'react';
import * as LucideIcons from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // "" | "enviando" | "success" | "error"

  // Función de seguridad para evitar que la página se ponga en blanco
  const getIcon = (name) => {
    return LucideIcons[name] || 
           LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)] || 
           LucideIcons.Code; 
  };

  const MailIcon = getIcon('mail');
  const LinkedinIcon = getIcon('linkedin');
  const GithubIcon = getIcon('github');
  const MapIcon = getIcon('mapPin');
  const SendIcon = getIcon('send');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("enviando");

    // REEMPLAZA ESTOS DATOS CON LOS TUYOS DE EMAILJS
    const SERVICE_ID = "service_xxxxxx"; 
    const TEMPLATE_ID = "template_xxxxxx";
    const PUBLIC_KEY = "tu_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus("success");
          form.current.reset(); // Limpia el formulario al terminar
          setTimeout(() => setStatus(""), 5000); // Quita el mensaje de éxito tras 5s
      }, (error) => {
          setStatus("error");
          setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section id="contacto" className="py-20 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-white">Trabajemos juntos</h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 max-w-xl mx-auto">
          ¿Tienes un proyecto en mente o una oportunidad de prácticas? ¡Escríbeme!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Columna de Información */}
        <div className="lg:col-span-2 bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-10 space-y-8">
          <h3 className="text-xl font-bold text-white">Información de Contacto</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-800/50 rounded-2xl text-blue-500"><MailIcon size={24} /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                <p className="font-bold text-white">manuelyovaniPerez@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-800/50 rounded-2xl text-blue-500"><LinkedinIcon size={24} /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">LinkedIn</p>
                <p className="font-bold text-white">/in/manuel-yovani</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-800/50 rounded-2xl text-blue-500"><GithubIcon size={24} /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Github</p>
                <p className="font-bold text-white">@MANUEL666GAMER</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-800/50 rounded-2xl text-blue-500"><MapIcon size={24} /></div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ubicación</p>
                <p className="font-bold text-white">Cancún, Quintana Roo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form ref={form} onSubmit={sendEmail} className="lg:col-span-3 bg-[#0f172a] border border-slate-800 rounded-[2.5rem] p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400">Nombre completo</label>
              <input 
                name="from_name"
                type="text" 
                placeholder="Ej. Juan Pérez" 
                required
                className="w-full bg-[#030712] border border-slate-800 p-4 rounded-xl focus:border-blue-500 outline-none text-white transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400">Email de contacto</label>
              <input 
                name="reply_to"
                type="email" 
                placeholder="tu@email.com" 
                required
                className="w-full bg-[#030712] border border-slate-800 p-4 rounded-xl focus:border-blue-500 outline-none text-white transition-colors" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-400">Tu mensaje</label>
            <textarea 
              name="message"
              rows="5" 
              placeholder="Cuéntame sobre tu propuesta..." 
              required
              className="w-full bg-[#030712] border border-slate-800 p-4 rounded-xl focus:border-blue-500 outline-none text-white transition-colors resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            disabled={status === "enviando"}
            className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
              status === "enviando" ? "bg-slate-700 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {status === "enviando" ? "Enviando..." : "Enviar mensaje"} 
            <SendIcon size={18} />
          </button>

          {/* Notificaciones de estado */}
          {status === "success" && (
            <div className="text-emerald-400 text-center font-bold animate-bounce">
              ¡Gracias! El correo se envió correctamente.
            </div>
          )}
          {status === "error" && (
            <div className="text-red-400 text-center font-bold">
              Error al enviar. Por favor, revisa tus credenciales.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;