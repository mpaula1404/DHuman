import React from 'react';
import { IconType } from 'react-icons';

interface OptionCardProps {
  icon: IconType;
  label: string;
  link: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon: Icon, label, link }) => {
  return (
    <a href={link} className="bg-bank2 p-6 rounded-2xl flex flex-col items-center justify-center w-48 h-48 hover:shadow-lg hover:scale-105 transition-all">
      <Icon size={48} className="text-black mb-4" />
      <p className="text-center text-black font-semibold">{label}</p>
    </a>
  );
};

export default OptionCard;
