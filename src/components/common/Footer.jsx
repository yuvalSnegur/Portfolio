import React, { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle.jsx";

export default function Footer() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - lastY.current;
      if (Math.abs(delta) > 8) {
        setHidden(delta > 0);
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "mailto:yuvals00111@gmail.com", label: "Email", icon: Mail },
    { href: "https://www.linkedin.com/in/yuval-snegur/", label: "LinkedIn", icon: Linkedin },
    { href: "https://github.com/YuvalSnegur", label: "GitHub", icon: Github },
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-40 border-t border-slate-800/60 bg-slate-900/70 backdrop-blur-sm transition-transform duration-200 ${hidden ? "translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-white">Yuval Snegur</div>
            <div className="hidden sm:block text-slate-400 text-xs">AI & Full-Stack Developer</div>
          </div>
          <div className="text-center text-slate-500 text-xs">
            © {new Date().getFullYear()} • React • Vite • Tailwind
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-lg border border-slate-700/60 p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-150"
                aria-label={l.label}
              >
                <l.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


