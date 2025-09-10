import React from "react";

export function Textarea({ className = "", ...props }) {
  const base = "w-full rounded-md border bg-slate-800/50 border-slate-600 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  return <textarea className={[base, className].join(" ")} {...props} />;
}


