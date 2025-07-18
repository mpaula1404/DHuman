import React from 'react';

interface DateProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DateProps> = ({ selectedDate, onChange }) => {
  return (
    <input
      type="date"
      value={selectedDate.toISOString().split('T')[0]}
      onChange={(e) => onChange(new Date(e.target.value))}
      className="border border-gray-300 rounded-md p-2"
    />
  );
};

export default DatePicker;
