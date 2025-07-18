import React from "react";
import { StarRatingCapacitacion } from "@/components/Atoms/StarRatingCapacitacion";
import { ButtonCapacitacion } from "@/components/Atoms/ButtonCapacitacion";

interface TrainingCardProps {
  title: string;
  date: string;
  completed?: boolean;
  onSave?: () => void;
  onRegister?: () => void;
}

export const TrainingCardCapacitacion: React.FC<TrainingCardProps> = ({
  title,
  date,
  completed = false,
  onSave,
  onRegister,
}) => {
  return (
    <div className="border rounded-lg p-4 w-64 shadow-md text-center">
      <StarRatingCapacitacion />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>

      {!completed ? (
        <div className="flex justify-between mt-4">
          <ButtonCapacitacion text="Guardar" onClick={onSave} variant="ghost" />
          <ButtonCapacitacion text="Inscribirse" onClick={onRegister} />
        </div>
      ) : (
        <p className="mt-4 text-green-600 font-semibold">COMPLETADO</p>
      )}
    </div>
  );
};
