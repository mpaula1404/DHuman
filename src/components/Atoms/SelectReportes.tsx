import React from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export const SelectReportes: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
}) => (
  <select
    className="border px-3 py-2 rounded-md"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((opt, i) => (
      <option key={i} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
