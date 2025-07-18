import React from "react";
import { ToggleSwitchPerfil } from "@/components/Atoms/ToggleSwitchPerfil";
import { SelectLanguagePerfil } from "@/components/Atoms/SelectLanguagePerfil";
import { ButtonPerfil } from "@/components/Atoms/ButtonPerfil";

interface Props {
  notifications: boolean;
  setNotifications: (val: boolean) => void;
  language: string;
  setLanguage: (val: string) => void;
}

export const ConfigSectionPerfil: React.FC<Props> = ({
  notifications,
  setNotifications,
  language,
  setLanguage,
}) => (
  <div>
    <h2 className="text-lg font-semibold mb-2">Configuraciones</h2>
    <div className="flex items-center justify-between mb-2">
      <span>Notificaciones:</span>
      <ToggleSwitchPerfil
        enabled={notifications}
        onToggle={() => setNotifications(!notifications)}
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm mb-1">Idioma:</label>
      <SelectLanguagePerfil value={language} onChange={setLanguage} />
    </div>

    <p className="text-sm text-gray-500 mb-4 cursor-pointer hover:underline">
      Privacidad
    </p>
    <ButtonPerfil>Cambiar contraseña</ButtonPerfil>
  </div>
);
