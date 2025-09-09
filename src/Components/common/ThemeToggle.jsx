import React, { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [mode, setMode] = useState("auto");

  useEffect(() => {
    const saved = localStorage.getItem("theme-mode");
    if (saved) setMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
    const root = document.documentElement;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = mode === "dark" || (mode === "auto" && prefersDark);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [mode]);

  const next = () => {
    setMode((m) => (m === "auto" ? "light" : m === "light" ? "dark" : "auto"));
  };

  const Icon = mode === "auto" ? Monitor : mode === "light" ? Sun : Moon;
  const label = `Theme: ${mode}`;

  return (
    <button
      onClick={next}
      className="rounded-lg border border-slate-700/60 p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-150"
      title={label}
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  );
}


