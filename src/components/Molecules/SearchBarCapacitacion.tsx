import React from "react";
import { InputCapacitacion } from "@/components/Atoms/InputCapacitacion";
import { ButtonCapacitacion } from "@/components/Atoms/ButtonCapacitacion";

export const SearchBarCapacitacion = () => (
  <div className="flex items-center gap-4 mb-6 px-40">
    <span className="text-2xl">🔍</span>
    <InputCapacitacion placeholder="Buscar capacitación" />
    <ButtonCapacitacion text="Buscar" />
  </div>
);
