import React from "react";
import Button from "@/components/Atoms/Buttons";
import NavTitle from "@/components/Molecules/Sidebar";
import DashboardMenu from "@/components/Organisms/Nav/DashboardMenu";

const index = () => {
  return (
    <div className="flex">
      <NavTitle />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-4xl font-bold p-4">Bienvenido al sistema</h1>
        <p className="text-gray-600 mb-8 p-3">¿Qué quieres hacer hoy?</p>
        <DashboardMenu />
      </main>
    </div>
  );
};

export default index;
