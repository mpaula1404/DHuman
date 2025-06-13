import React from 'react';

interface SelectInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="border border-gray-300 rounded-md p-2 w-full"
  >
    <option value="Entrada">Entrada</option>
    <option value="Salida">Salida</option>
  </select>
);

export default SelectInput;
