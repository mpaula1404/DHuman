import React from "react";
import { TrainingCardCapacitacion } from "@/components/Molecules/TrainingCardCapacitacion";

interface SectionProps {
  title: string;
  trainings: {
    title: string;
    date: string;
    completed?: boolean;
  }[];
}

export const TrainingSectionCapacitacion: React.FC<SectionProps> = ({
  title,
  trainings,
}) => (
  <section className="mt-8 ">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="flex gap-4 flex-wrap">
      {trainings.map((training, i) => (
        <TrainingCardCapacitacion
          key={i}
          title={training.title}
          date={training.date}
          completed={training.completed}
        />
      ))}
    </div>
  </section>
);
