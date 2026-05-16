import React, { useRef, useState } from 'react';
// Importamos los iconos directamente
import { Mail, Briefcase, Code, MapPin, Send } from 'lucide-react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // "" | "enviando" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("enviando");

    // REEMPLAZA ESTOS DATOS CON LOS TUYOS DE EMAILJS
    const SERVICE_ID = "service_kzvsf7x"; 
    const TEMPLATE_ID = "template_psnmn9j";
    const PUBLIC_KEY = "v4UzbA43WWyaD0XvK";

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
        {/* Título Adaptable */}
        <h2 className="text-4xl font-black text-slate-900 dark:text-white">Trabajemos juntos</h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 dark:text-slate-500 max-w-xl mx-auto">
          ¿Tienes un proyecto en mente o una oportunidad de prácticas? ¡Escríbeme!
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        
        {/* Columna de Información */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 space-y-8 shadow-xl">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Información de Contacto</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-blue-600 dark:text-blue-500 border border-slate-100 dark:border-slate-700/50">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                <p className="font-bold text-slate-700 dark:text-white">manuelyovaniPerez@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-blue-600 dark:text-blue-500 border border-slate-100 dark:border-slate-700/50">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Briefcase</p>
                <p className="font-bold text-slate-700 dark:text-white">/in/manuel-yovani</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-blue-600 dark:text-blue-500 border border-slate-100 dark:border-slate-700/50">
                <Code size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Code</p>
                <p className="font-bold text-slate-700 dark:text-white">@MANUEL666GAMER</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-blue-600 dark:text-blue-500 border border-slate-100 dark:border-slate-700/50">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ubicación</p>
                <p className="font-bold text-slate-700 dark:text-white">Cancún, Quintana Roo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form ref={form} onSubmit={sendEmail} className="lg:col-span-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 space-y-6 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Nombre completo</label>
              <input 
                name="from_name"
                type="text" 
                placeholder="Ej. Juan Pérez" 
                required
                // Inputs adaptables
                className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 p-4 rounded-xl focus:border-blue-500 outline-none text-slate-800 dark:text-white transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Email de contacto</label>
              <input 
                name="reply_to"
                type="email" 
                placeholder="tu@email.com" 
                required
                className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 p-4 rounded-xl focus:border-blue-500 outline-none text-slate-800 dark:text-white transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-600 dark:text-slate-400">Tu mensaje</label>
            <textarea 
              name="message"
              rows="5" 
              placeholder="Cuéntame sobre tu propuesta..." 
              required
              className="w-full bg-slate-50 dark:bg-[#030712] border border-slate-200 dark:border-slate-800 p-4 rounded-xl focus:border-blue-500 outline-none text-slate-800 dark:text-white transition-colors resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
            ></textarea>
          </div>
          
          <button 
            type="submit"
            disabled={status === "enviando"}
            className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
              status === "enviando" ? "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {status === "enviando" ? "Enviando..." : "Enviar mensaje"} 
            <Send size={18} />
          </button>

          {/* Notificaciones de estado adaptables */}
          {status === "success" && (
            <div className="text-emerald-600 dark:text-emerald-400 text-center font-bold animate-bounce">
              ¡Gracias! El correo se envió correctamente.
            </div>
          )}
          {status === "error" && (
            <div className="text-red-600 dark:text-red-400 text-center font-bold">
              Error al enviar. Por favor, revisa tus credenciales de EmailJS.
            </div>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;