import React from "react";

export default function HoverGlow({ className = "", children }) {
  return (
    <div className={["relative group", className].join(" ")}> 
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-md" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}


