import React from "react";
import { motion as Motion } from "framer-motion";
import { Users, Zap, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TiltCard from "@/components/common/TiltCard.jsx";

export default function Experience() {
  const highlights = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led a specialized technical team in high-stakes environment"
    },
    {
      icon: Zap,
      title: "High-Pressure Performance",
      description: "Diagnosed and resolved critical avionics malfunctions under pressure"
    },
    {
      icon: Award,
      title: "Technical Expertise",
      description: "Specialized in advanced avionics systems and diagnostics"
    },
    {
      icon: Shield,
      title: "Mission Critical",
      description: "Maintained aircraft systems essential for national security"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Leadership and technical expertise forged in demanding environments
          </p>
        </Motion.div>

        {/* Main Experience Card */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Motion.div whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
            <Card className="rounded-xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderWidth: 1, backdropFilter: 'blur(6px)' }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 mb-4">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                        2019 - 2021
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Avionics Team Leader
                    </h3>
                    <div className="text-lg text-blue-400 font-semibold mb-4">
                      Israeli Air Force
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Led a specialized technical team responsible for diagnosing and fixing critical 
                      avionics malfunctions in high-pressure operational environments. Developed exceptional 
                      problem-solving skills and leadership capabilities while maintaining mission-critical 
                      aircraft systems.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {highlights.map((highlight, index) => (
                        <Motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: 0.25 + index * 0.06 }}
                          whileHover={{ y: -6, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }}
                          animate={{}}
                          // control hover speed
                          // framer uses the closest transition; add a short one for hover interactions
                          style={{ borderRadius: 12 }}
                        >
                          <div className="flex items-center space-x-3 p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 transition-[background-color,border-color] duration-150 hover:bg-blue-600/15 hover:border-blue-400">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-2 flex-shrink-0">
                              <highlight.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-sm">
                                {highlight.title}
                              </h4>
                              <p className="text-slate-400 text-xs">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </Motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Motion.div>
        </Motion.div>

        {/* Skills Developed */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Motion.div whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
            <Card className="rounded-xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderWidth: 1, backdropFilter: 'blur(6px)' }}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Leadership Skills Developed
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
                  This experience shaped my ability to work under extreme pressure, lead technical teams 
                  effectively, and solve complex problems quickly and efficiently. These skills directly 
                  translate to my approach in software development and AI projects.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Team Leadership",
                    "Crisis Management", 
                    "Technical Problem Solving",
                    "High-Pressure Decision Making",
                    "Systems Thinking",
                    "Quality Assurance"
                  ].map((skill, index) => (
                    <Motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/40 rounded-full text-blue-300 font-medium"
                    >
                      {skill}
                    </Motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}
