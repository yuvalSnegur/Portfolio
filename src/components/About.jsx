import React from "react";
import { motion as Motion } from "framer-motion";
import { Award, GraduationCap, Code, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "B.Sc. Computer Science",
      description: "GPA: 88 with Departmental Honors",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Award,
      title: "Certificates of Excellence",
      description: "Commended by Head of Department",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Modern web technologies and frameworks",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Brain,
      title: "AI & ML Specialist",
      description: "Advanced machine learning and NLP",
      color: "from-orange-500 to-red-500"
    }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C/C++", "SQL", "Java"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "Tokenization"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "HTML5", "CSS", "Bootstrap", "Material UI"]
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Express.js", "MongoDB", "Git", "Docker"]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science graduate with expertise in AI, machine learning, 
            and full-stack development. I combine academic excellence with practical experience 
            to create innovative solutions.
          </p>
        </Motion.div>

        {/* Achievements Grid */}
        <Motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <Motion.div
              key={index}
              whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }}
              transition={{ duration: 0.15 }}
              className="rounded-xl"
            >
              <Card className="h-full rounded-xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderWidth: 1, backdropFilter: 'blur(6px)' }}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} p-4`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Skills Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Motion.div whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
                  <Card className="h-full rounded-xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', borderWidth: 1, backdropFilter: 'blur(6px)' }}>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-blue-400 mb-4">
                        {category.title}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-200 border-slate-600/50 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-150"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Motion.div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* AI/ML Focus */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Motion.div whileHover={{ y: -8, boxShadow: "0 0 0 2px rgba(59,130,246,0.35)" }} transition={{ duration: 0.15 }} className="rounded-xl">
            <Card className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-blue-500/30 backdrop-blur-sm rounded-xl">
              <CardContent className="p-8 text-center">
                <Brain className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI & Machine Learning Focus
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">
                  Specialized in <span className="text-blue-400 font-semibold">natural language processing</span>, 
                  <span className="text-blue-400 font-semibold"> tokenization</span>, 
                  <span className="text-blue-400 font-semibold"> linear regression</span>, 
                  <span className="text-blue-400 font-semibold"> decision trees</span>, and 
                  <span className="text-blue-400 font-semibold"> model deployment</span>. 
                  I bridge the gap between cutting-edge AI research and practical applications.
                </p>
              </CardContent>
            </Card>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}
