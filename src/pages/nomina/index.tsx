import React from "react";
import Sidebar from "@/components/Molecules/Sidebar";
import { PaymentTable } from "@/components/Organisms/Nav/PaymentTable";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="p-10 w-full md:ml-40">
        <div className="py-8 w-full">
          <h1 className="text-3xl font-bold mb-4">Mis nóminas</h1>
          <p className="text-gray-600 mb-8">
            Consulta y descarga tus nóminas mensuales.
          </p>
          <div className="py-10">
            <PaymentTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
