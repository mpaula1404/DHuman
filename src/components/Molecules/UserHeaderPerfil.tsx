import React from "react";

export const UserHeaderPerfil = () => (
  <div className="flex items-center gap-4 mb-4">
    <img src="Avatar.png" alt="Avatar" className="w-20 h-20 rounded-full" />
    <div>
      <h1 className="text-2xl font-bold">
        <u>Mateo Reyes</u>
      </h1>
      <p className="text-gray-600">Supervisor</p>
    </div>
  </div>
);
