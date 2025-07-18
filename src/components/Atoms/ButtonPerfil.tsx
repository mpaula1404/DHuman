import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonPerfil: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 transition ${className}`}
  >
    {children}
  </button>
);
