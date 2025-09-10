import React from "react";

export function Card({ className = "", ...props }) {
  return (
    <div
      className={[
        "rounded-xl border border-slate-700 bg-slate-800 text-white shadow-sm",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }) {
  return <div className={["p-6", className].join(" ")} {...props} />;
}

export function CardTitle({ className = "", ...props }) {
  return <h3 className={["text-lg font-semibold", className].join(" ")} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={["p-7 pt-1 md:p-8 md:pt-2", className].join(" ")} {...props} />;
}


