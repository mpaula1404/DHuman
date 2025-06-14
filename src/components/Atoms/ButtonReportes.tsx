import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export const ButtonReportes: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded-md bg-bank2 text-white hover:bg-slate-500 transition ${className}`}
    >
      {children}
    </button>
  );
};
