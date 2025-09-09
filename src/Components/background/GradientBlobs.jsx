import React from "react";

export default function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 blur-3xl animate-[spin_40s_linear_infinite]" />
      <div className="absolute -bottom-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-cyan-400/10 to-purple-500/10 blur-3xl animate-[spin_50s_linear_infinite_reverse]" />
    </div>
  );
}


