import React, { useState } from "react";
import Link from "next/link";
import NavTitle from "../Atoms/NavTitle";
import {
  FaClock,
  FaFileAlt,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa para móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-bank4 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bank2 flex flex-col justify-between shadow-lg z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:block`}
      >
        <div className="fixed top-0 left-0 h-screen w-64 bg-bank2 flex flex-col justify-between shadow-lg">
          <div className="flex flex-col items-center pt-6 px-4">
            <div className="bg-bank2 text-bank4 font-bold text-4xl w-35 h-30 rounded-2xl flex items-center justify-center mb-8 hover:border-b-2 hover:border-bank4">
                <Link href="/inicio/">
                  <img src="/images/logo.png" alt="logo de Dhuman" />
                </Link>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <NavTitle
                icon={<FaClock />}
                label="Registrar hora"
                href="/registerhours"
              />
              <NavTitle
                icon={<FaFileAlt />}
                label="Ver mi nómina"
                href="/nomina"
              />
              <NavTitle
                icon={<FaCalendarAlt />}
                label="Solicitar permisos"
                href="/permisos"
              />
              <NavTitle
                icon={<FaChalkboardTeacher />}
                label="Capacitaciones"
                href="/capacitaciones"
              />
              <NavTitle
                icon={<FaChartLine />}
                label="Evaluación de desempeño"
                href="/reportes"
              />
            </div>
          </div>

          <div className="bg-bank4 text-white px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center">
              MR
            </div>
            <button
              className="text-sm font-medium cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
