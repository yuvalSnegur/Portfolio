import React from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "yuvals00111@gmail.com",
      href: "mailto:yuvals00111@gmail.com",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "0529535957",
      href: "tel:0529535957",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "YuvalSnegur",
      href: "https://www.linkedin.com/in/yuval-snegur/",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "YuvalSnegur",
      href: "https://github.com/YuvalSnegur",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">{method.title}</div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </Motion.a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-slate-300">
                  I typically respond within 24 hours
                </p>
              </CardContent>
            </Card>
          </Motion.div>

          {/* Right column intentionally removed (no form) */}
        </div>

        {/* Footer */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-700/50 text-center"
        >
          <p className="text-slate-400">
            © 2024 Yuval Snegur. Built with React and passion for innovation.
          </p>
        </Motion.div>
      </div>
    </section>
  );
}
