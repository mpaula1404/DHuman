import React, { useState } from 'react';
import SelectInput from '@/components/Atoms/SelectInput';
import DatePicker from '@/components/Molecules/Date';


const RegisterHours = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [entryType, setEntryType] = useState('Entrada');

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Registrar ingreso / salida</h1>
      <p className="text-gray-600 mb-8">Registra entrada o salida con la hora actual.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
          <p className="mt-4 text-sm text-gray-500">
            🔒 Solo puedes registrar tu entrada o salida en tiempo real. No se permite edición posterior.
          </p>
        </div>

    
        <div className="space-y-4">
          <p className="text-gray-700">Estado actual: <span className="font-medium">No has registrado tu entrada</span></p>

          <div className="bg-white shadow p-4 rounded-md">
            <p className="font-medium">Scheduled: Catch up</p>
            <p>Saturday, July 20, 2024 at 8:50 AM</p>
            <button className="mt-2 px-3 py-1 border border-gray-400 rounded hover:bg-gray-100">Undo</button>
          </div>

          <div>
            <p className="mb-1 text-gray-700">Tipo:</p>
            <SelectInput value={entryType} onChange={(e) => setEntryType(e.target.value)} />
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-bank4 text-white px-4 py-2 rounded hover:bg-bank4/90">Registrar</button>
            <button className="text-bank4 underline">Ver historial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHours;
