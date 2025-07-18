import React from "react";
import { FileInputPerfil } from "@/components/Atoms/FileInputPerfil";

export const PersonalInfoPerfil = () => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">Información personal</h2>
    <p>Correo: mateo.supervisor.com</p>
    <p>Teléfono: 3070987201</p>
    <p>Ciudad: Medellín/Antioquia</p>
    <p>Fecha de nacimiento: 23/07/2004</p>
    <div className="mt-2">
      Hoja de vida: <FileInputPerfil />
    </div>
  </div>
);
