import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputCapacitacion: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  className,

}) => (
  <input
    type="text"
    className={`border px-4 py-2 rounded w-64 ${className ?? ""}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
