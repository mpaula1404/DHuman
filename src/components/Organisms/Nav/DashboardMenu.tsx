import React from "react";
import OptionCard from "../../Atoms/OptionCard";

import {
  FaClock,
  FaFileAlt,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaChartLine,
  FaUser,
} from "react-icons/fa";

const DashboardMenu = () => {
  const options = [
    { icon: FaClock, label: "Registrar hora", link: "/registerhours" },
    { icon: FaFileAlt, label: "Ver mi nómina", link: "/nomina" },
    {
      icon: FaCalendarCheck,
      label: "Solicitar permisos o vacaciones",
      link: "/permisos",
    },
    {
      icon: FaChalkboardTeacher,
      label: "Capacitaciones",
      link: "/capacitaciones",
    },
    {
      icon: FaChartLine,
      label: "Evaluación de desempeño",
      link: "/reportes",
    },
    { icon: FaUser, label: "Perfil", link: "/perfil" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {options.map((opt, idx) => (
        <OptionCard
          key={idx}
          icon={opt.icon}
          label={opt.label}
          link={opt.link}
        />
      ))}
    </div>
  );
};

export default DashboardMenu;
