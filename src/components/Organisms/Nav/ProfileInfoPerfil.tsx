import React, { useState } from "react";
import { UserHeaderPerfil } from "@/components/Molecules/UserHeaderPerfil";
import { PersonalInfoPerfil } from "@/components/Molecules/PersonalInfoPerfil";
import { ConfigSectionPerfil } from "@/components/Molecules/ConfigSectionPerfil";

export const ProfileInfoPerfil = () => {
  const [notifications, setNotifications] = useState(false);
  const [language, setLanguage] = useState("Español");

  return (
    <div className="w-1/2   pr-20">
      <UserHeaderPerfil />
      <PersonalInfoPerfil />
      <ConfigSectionPerfil
        notifications={notifications}
        setNotifications={setNotifications}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
};
