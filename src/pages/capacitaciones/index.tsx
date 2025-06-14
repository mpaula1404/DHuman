// src/pages/capacitaciones/index.tsx
import React from "react";
import NavTitle from "@/components/Molecules/Sidebar";
import { SearchBarCapacitacion } from "@/components/Molecules/SearchBarCapacitacion";
import { TrainingSectionCapacitacion } from "@/components/Organisms/TrainingSectionCapacitacion";

const Index = () => {
  const upcoming = [
    { title: "Python básico", date: "23/05/2025, 8:10 am" },
    { title: "Python básico", date: "23/05/2025, 8:10 am" },
    { title: "Python básico", date: "23/05/2025, 8:10 am" },
  ];

  const completed = [
    { title: "React", date: "23/05/2025, 8:10 am", completed: true },
    { title: "GitHub", date: "23/05/2025, 8:10 am", completed: true },
    { title: "React", date: "23/05/2025, 8:10 am", completed: true },
  ];

  return (
    <div className="flex px-10">
      <NavTitle />
      <div className="p-8 w-full px-80">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          🎓 Capacitaciones
        </h1>
        <SearchBarCapacitacion />

        <TrainingSectionCapacitacion
          title="Próximas capacitaciones:"
          trainings={upcoming}
        />
        <TrainingSectionCapacitacion
          title="Mis capacitaciones:"
          trainings={completed}
        />
      </div>
    </div>
  );
};

export default Index;
