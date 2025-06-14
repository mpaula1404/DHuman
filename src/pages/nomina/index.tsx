import React from "react";
import NavTitle from "@/components/Molecules/Sidebar";
import { PaymentTable } from "@/components/Organisms/PaymentTable";

const Index = () => {
  return (
    <div className="flex px-80">
      <NavTitle />
      <div className="py-8 w-full">
        <h1 className="text-3xl font-bold mb-4">Mis nóminas</h1>
        <p className="text-gray-600 mb-8">
          Consulta y descarga tus nóminas mensuales.
        </p>
        <div className="px-15 py-10">
          <PaymentTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
