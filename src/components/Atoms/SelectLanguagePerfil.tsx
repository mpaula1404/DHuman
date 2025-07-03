import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SelectLanguagePerfil: React.FC<Props> = ({ value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border px-4 py-2 rounded"
  >
    <option>Español</option>
    <option>Inglés</option>
  </select>
);
