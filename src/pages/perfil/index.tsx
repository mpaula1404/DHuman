import NavTitle from "@/components/Molecules/Sidebar";
import { ProfileInfoPerfil } from "@/components/Organisms/Nav/ProfileInfoPerfil";
import React from "react";

const Index = () => {
  return (
    <div className="flex px-80">
      <NavTitle />
      <div className="flex py-15">
        <ProfileInfoPerfil />
      </div>
    </div>
  );
};

export default Index;
