import React from "react";

interface ToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export const ToggleSwitchPerfil: React.FC<ToggleProps> = ({
  enabled,
  onToggle,
}) => (
  <label className="flex items-center cursor-pointer">
    <input
      type="checkbox"
      checked={enabled}
      onChange={onToggle}
      className="sr-only"
    />
    <div
      className={`w-10 h-5 rounded-full p-1 transition-all ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      ></div>
    </div>
    <span className="ml-2 text-sm text-gray-500">
      {enabled ? "Activado" : "Desactivado"}
    </span>
  </label>
);
