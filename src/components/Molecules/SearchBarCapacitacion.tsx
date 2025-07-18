import React from "react";
import { InputCapacitacion } from "@/components/Atoms/InputCapacitacion";
import { ButtonCapacitacion } from "@/components/Atoms/ButtonCapacitacion";

export const SearchBarCapacitacion = () => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 px-4 sm:px-5 md:px-20 lg:px-32 xl:px-40">
    <span className="text-2xl">🔍</span>
    <InputCapacitacion placeholder="Buscar capacitación" className="w-full sm:w-auto" />
    <ButtonCapacitacion text="Buscar" className="w-full sm:w-auto" />
  </div>
);

