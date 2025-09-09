import React from "react";
import { motion as Motion } from "framer-motion";
import { ExternalLink, Code, Brain, Smartphone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "AI Email Scanner",
      description: "Advanced Node.js application integrating AI APIs for intelligent phishing and spam detection with comprehensive feature extraction and score visualization.",
      icon: Brain,
      technologies: ["Node.js", "AI APIs", "JavaScript", "Machine Learning", "Data Visualization"],
      features: [
        "Real-time phishing detection",
        "Advanced feature extraction",
        "Interactive score visualization",
        "AI-powered classification"
      ],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Task Manager (Full-Stack)",
      description: "Full-stack task management web app built with React + Vite frontend and a Node/Express API, featuring CRUD, filters, and persistence.",
      icon: Globe,
      technologies: ["React", "Vite", "Node.js", "Express", "REST", "MongoDB"],
      features: [
        "Create, edit, complete, and delete tasks",
        "Search and filter by status/priority",
        "Responsive UI with optimistic updates",
        "Persistent storage with REST API"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "ML Foundations & Applied Project",
      description: "Comprehensive machine learning project implementing core algorithms and practical applications including medical image analysis.",
      icon: Brain,
      technologies: ["Python", "TensorFlow", "scikit-learn", "NumPy", "Computer Vision"],
      features: [
        "Linear regression implementation",
        "Decision tree algorithms",
        "NLP processing tools",
        "Age prediction from X-ray images"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Responsive Web Interfaces",
      description: "Modern, responsive user interfaces built with cutting-edge frontend technologies for optimal user experience across all devices.",
      icon: Globe,
      technologies: ["React", "HTML5", "CSS3", "Bootstrap", "Material UI", "Responsive Design"],
      features: [
        "Mobile-first responsive design",
        "Modern component architecture",
        "Cross-browser compatibility",
        "Accessibility compliance"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects spanning AI, machine learning, and full-stack development
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <Motion.div whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl h-full">
                <Card className="h-full min-h-[460px] flex flex-col rounded-xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderWidth: 1, backdropFilter: 'blur(6px)' }}>
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${project.gradient} p-4`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-200 border-slate-600/50 transition-colors duration-150 hover:bg-blue-600/20 hover:border-blue-500/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mr-3 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Motion.div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
