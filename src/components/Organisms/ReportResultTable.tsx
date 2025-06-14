import React from "react";

export const ReportResultTable = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mt-10 mb-2">Nomina</h2>
      <table className="w-full border text-left shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Empleado</th>
            <th className="border px-4 py-2">Salario base</th>
            <th className="border px-4 py-2">Deducciones</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Maria Paula Mosquera</td>
            <td className="border px-4 py-2">10.000.000</td>
            <td className="border px-4 py-2">600.000</td>
            <td className="border px-4 py-2">9.400.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
