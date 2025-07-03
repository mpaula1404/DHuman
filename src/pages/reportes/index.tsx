import React, { useState } from "react";
import { SummaryReportes } from "@/components/Molecules/SummaryReportes";
import { ButtonReportes } from "@/components/Atoms/ButtonReportes";
import { ReportResultTable } from "@/components/Organisms/Nav/ReportResultTable";
import NavTitle from "@/components/Molecules/Sidebar";

const Desempeno = () => {
  const [reportType, setReportType] = useState("NOMINA");

  return (
    <div className="flex px-80">
      <NavTitle />
      <div className="w-full py-8">
        <h1 className="text-3xl font-bold mb-6">Evaluación de desempeño</h1>
        <div className=" py-10 ">
          <SummaryReportes
            reportType={reportType}
            setReportType={setReportType}
          />
          <ButtonReportes>Generar reporte</ButtonReportes>

          <ReportResultTable />
          <div className="flex gap-4 mt-4">
            <ButtonReportes>Exportar PDF</ButtonReportes>
            <ButtonReportes>Exportar PSV</ButtonReportes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desempeno;
