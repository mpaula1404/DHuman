import React from "react";
import { SelectReportes } from "@/components/Atoms/SelectReportes";

interface Props {
  reportType: string;
  setReportType: (val: string) => void;
}

export const SummaryReportes: React.FC<Props> = ({
  reportType,
  setReportType,
}) => {
  return (
    <table className="w-full text-left mb-4 border">
      <tbody>
        <tr>
          <td className="border px-4 py-2 font-semibold">Tipo de reporte:</td>
          <td className="border px-4 py-2">
            <SelectReportes
              options={["NOMINA", "DESEMPEÑO"]}
              value={reportType}
              onChange={setReportType}
            />
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Periodo</td>
          <td className="border px-4 py-2">
            Friday, February 10, 2023 at 5:57 PM
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Empleado</td>
          <td className="border px-4 py-2">Maria Paula Mosquera</td>
        </tr>
        <tr>
          <td className="border px-4 py-2 font-semibold">Departamento</td>
          <td className="border px-4 py-2">Sistemas</td>
        </tr>
      </tbody>
    </table>
  );
};
