import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export const ButtonCapacitacion: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  className = "",

}) => {
  const base = "px-4 py-2 rounded text-white font-semibold ";
  const styles = {
    primary: `${base} bg-slate-600 hover:bg-slate-700`,
    ghost: `${base} bg-slate-200 text-slate-800 hover:bg-slate-300`,
  };
  return (
    <button onClick={onClick} className={`${styles[variant]} ${className}`}>
      {text}
    </button>
  );
};
