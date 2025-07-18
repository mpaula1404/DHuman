import React from "react";
import NavTitle from "@/components/Molecules/Sidebar";
import DashboardMenu from "@/components/Organisms/Nav/DashboardMenu";

const index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <NavTitle />
      <main className="p-8 w-full md:ml-45">
        <h1 className="text-3xl font-bold mb-4">Bienvenido al sistema</h1>
        <p className="text-gray-600 mb-7">¿Qué quieres hacer hoy?</p>
        <DashboardMenu />
      </main>
    </div>
  );
};

export default index;
