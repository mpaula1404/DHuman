import React from "react";
// Button nomina
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-bank3 text-white px-4 py-1 rounded hover:bg-bank2"
    >
      {label}
    </button>
  );
}
