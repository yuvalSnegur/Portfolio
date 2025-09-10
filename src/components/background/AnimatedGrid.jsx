import React from "react";

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.08),transparent_40%)]" />
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(100,116,139,0.15)" strokeWidth="1" />
            </pattern>
            <pattern id="gridBold" width="160" height="160" patternUnits="userSpaceOnUse">
              <path d="M 160 0 L 0 0 0 160" fill="none" stroke="rgba(100,116,139,0.15)" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#gridBold)" />
        </svg>
      </div>
      <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(1000px_500px_at_90%_0%,rgba(99,102,241,0.08),transparent_40%)]" />
    </div>
  );
}


