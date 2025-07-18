import React, { useState } from "react";
import SelectInput from "@/components/Atoms/SelectInput";
import DatePicker from "@/components/Molecules/Date";
import Sidebar from "@/components/Molecules/Sidebar";

const Permisos = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entryType, setEntryType] = useState("Entrada");

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      <main className="p-10 w-full md:ml-30">
      <h1 className="text-3xl font-bold mb-4">
        Solicitar permiso / vacaciones
      </h1>

      <div className="gap-4 mb-8">
        <p className="mb-1 text-gray-700">Tipo de solicitud:</p>
        <SelectInput
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
        </div>

        <div className="space-y-15">
          <p className="text-gray-700">
            Estado actual:<br/>
            No has registrado permisos o vacaciones

          </p>

          <div className="bg-white shadow p-4 rounded-md">
            <p className="font-medium">Fecha de inicio</p>
            <p>Saturday, July 20, 2024 at 8:50 AM</p>
            <button className="mt-2 px-3 py-1 border border-gray-400 rounded hover:bg-gray-100">
              Undo
            </button>
          </div>
          <div className="bg-white shadow p-4 rounded-md">
            <p className="font-medium">Fecha fin</p>
            <p>Saturday, July 28, 2024 at 10:50 AM</p>
            <button className="mt-2 px-3 py-1 border border-gray-400 rounded hover:bg-gray-100">
              Undo
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-bank4 text-white px-4 py-2 rounded hover:bg-bank4/90">
              Registrar
            </button>
            <button className="text-bank4 underline">Ver historial</button>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Permisos;
