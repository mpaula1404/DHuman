import Sidebar from "@/components/Molecules/Sidebar";
import { ProfileInfoPerfil } from "@/components/Organisms/Nav/ProfileInfoPerfil";
import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex py-15 px-15">
        <ProfileInfoPerfil />
      </div>
    </div>
  );
};

export default Index;
