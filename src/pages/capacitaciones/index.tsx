import React from "react";
import Sidebar from "@/components/Molecules/Sidebar";
import { SearchBarCapacitacion } from "@/components/Molecules/SearchBarCapacitacion";
import { TrainingSectionCapacitacion } from "@/components/Organisms/Nav/TrainingSectionCapacitacion";

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
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <main className="p-10 w-full md:ml-40">
        <div>
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
      </main>
    </div>
  );
};

export default Index;
