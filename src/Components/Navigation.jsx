import React from "react";
import { motion as Motion } from "framer-motion";

export default function Navigation({ activeSection }) {
  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: 'var(--surface-solid)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            Yuval Snegur
          </Motion.div>
          
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <Motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ y: -6, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }}
                transition={{ duration: 0.15 }}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  activeSection === section.id
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {activeSection === section.id && (
                  <Motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30"
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </Motion.button>
            ))}
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <select 
              value={activeSection}
              onChange={(e) => scrollToSection(e.target.value)}
              className="bg-slate-800 border border-slate-600 text-slate-300 text-sm rounded-lg px-3 py-2"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </Motion.nav>
  );
}
