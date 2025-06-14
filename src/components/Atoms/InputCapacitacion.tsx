import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCapacitacion: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => (
  <input
    type="text"
    className="border px-4 py-2 rounded w-64"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
