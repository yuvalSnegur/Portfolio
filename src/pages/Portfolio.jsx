import React, { useEffect, useMemo, useState } from "react";
import Navigation from "@/Components/Navigation.jsx";
import Hero from "@/Components/Hero.jsx";
import About from "@/Components/About.jsx";
import Projects from "@/Components/Projects.jsx";
import Experience from "@/Components/Experience.jsx";
import Skills from "@/Components/Skills.jsx";
import AnimatedGrid from "@/components/background/AnimatedGrid.jsx";
import GradientBlobs from "@/components/background/GradientBlobs.jsx";
import ScrollProgress from "@/components/common/ScrollProgress.jsx";
import ScrollToTop from "@/components/common/ScrollToTop.jsx";
import Footer from "@/components/common/Footer.jsx";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  const sectionIds = useMemo(
    () => ["hero", "about", "projects", "experience", "skills"],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      <ScrollProgress />
      <AnimatedGrid />
      <GradientBlobs />
      <Navigation activeSection={activeSection} />
      <main className="pt-20 space-y-0">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
