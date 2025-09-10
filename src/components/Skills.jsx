import React from "react";
import { motion as Motion } from "framer-motion";
import { 
  Code, 
  Brain, 
  Globe, 
  Database, 
  Wrench, 
  Monitor,
  Server,
  Smartphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 90 },
        { name: "C", level: 85 },
        { name: "C++", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "scikit-learn", level: 95 },
        { name: "pandas", level: 90 },
        { name: "NumPy", level: 95 },
        { name: "OpenAI API", level: 90 },
        { name: "NLP", level: 90 },
        { name: "Tokenization", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React", level: 90 },
        { name: "Bootstrap", level: 100 },
        { name: "Material UI", level: 100 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: Database,
      gradient: "from-orange-500 to-red-600",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "MongoDB", level: 95 },
        { name: "SQL Databases", level: 95 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 90 },
        { name: "VSCode", level: 95 }
      ]
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      gradient: "from-indigo-500 to-purple-600",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Windows", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across the full technology stack
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Motion.div whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl h-full">
                <Card className="h-full rounded-xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderWidth: 1, backdropFilter: 'blur(6px)' }}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${group.gradient} p-4`}>
                      <group.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {group.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {group.skills.map((skill, skillIndex) => (
                      <Motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <Motion.div
                            className={`h-full bg-gradient-to-r ${group.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          />
                        </div>
                      </Motion.div>
                    ))}
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
