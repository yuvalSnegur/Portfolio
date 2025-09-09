import React from "react";

export function Badge({ className = "", variant = "", ...props }) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium";
  const variants = {
    secondary: "bg-slate-700/50 text-slate-200 border-slate-600/50",
    default: "bg-slate-700 text-white border-slate-600",
  };
  const cls = [base, variants[variant] || variants.default, className].join(" ");
  return <span className={cls} {...props} />;
}


