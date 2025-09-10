import React, { useRef } from "react";

export default function TiltCard({ className = "", max = 12, glare = true, children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;
    el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    if (glare) {
      el.style.setProperty("--glow-x", `${px * 100}%`);
      el.style.setProperty("--glow-y", `${py * 100}%`);
    }
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={[
        "transition-transform duration-200 will-change-transform",
        glare ? "relative" : "",
        className,
      ].join(" ")}
      style={{ transformStyle: "preserve-3d" }}
    >
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background:
              "radial-gradient(500px 300px at var(--glow-x,50%) var(--glow-y,50%), rgba(59,130,246,0.12), transparent 60%)",
          }}
        />
      )}
      {children}
    </div>
  );
}


