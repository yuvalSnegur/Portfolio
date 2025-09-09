import React from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const contactInfo = [
    { icon: Phone, text: "0529535957", href: "tel:0529535957" },
    { icon: Mail, text: "yuvals00111@gmail.com", href: "mailto:yuvals00111@gmail.com" },
    { icon: Linkedin, text: "YuvalSnegur", href: "https://www.linkedin.com/in/yuval-snegur/" },
    { icon: Github, text: "YuvalSnegur", href: "https://github.com/YuvalSnegur" }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume/Snegur_Yuval_Resume.docx';
    link.download = 'Snegur_Yuval_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.20), rgba(79,70,229,0.20))' }} />
        {[...Array(50)].map((_, i) => (
          <Motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <Motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent">
                Yuval Snegur
              </span>
            </Motion.h1>
            
            <Motion.h2 
              className="text-2xl md:text-3xl font-light text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AI & Full-Stack Developer
            </Motion.h2>
            
            <Motion.p 
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Building AI-driven solutions and full-stack applications with modern technologies
            </Motion.p>
          </div>

          {/* Contact Info */}
          <Motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {contactInfo.map((contact, index) => (
              <Motion.div key={index} whileHover={{ y: -6, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-center space-x-2 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-colors duration-150 hover:bg-slate-700/50 relative overflow-hidden"
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
                  <contact.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                    {contact.text}
                  </span>
                  {contact.href.startsWith('http') && (
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  )}
                </a>
              </Motion.div>
            ))}
          </Motion.div>

          {/* CTA Buttons */}
          <Motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Motion.div whileHover={{ y: -6, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
              <Button 
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </Motion.div>
            
            <Motion.div whileHover={{ y: -6, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Get In Touch
              </Button>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}
