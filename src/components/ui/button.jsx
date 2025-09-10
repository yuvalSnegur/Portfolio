import React from "react";

export function Button({ className = "", variant = "", size = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    outline: "border border-slate-600 text-slate-300 bg-transparent hover:bg-slate-800",
    default: "bg-slate-700 text-white hover:bg-slate-600",
  };
  const sizes = {
    sm: "h-9 px-3",
    md: "h-10 px-4",
    lg: "h-11 px-6",
  };
  const cls = [base, variants[variant] || variants.default, sizes[size] || "", className]
    .filter(Boolean)
    .join(" ");
  return <button className={cls} {...props} />;
}


