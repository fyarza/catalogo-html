import React from "react";

export const SettingsHeader: React.FC = () => {
  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center p-4 pb-3">
        <div className="w-10"></div>
        <h1 className="flex-1 text-xl font-bold text-center">Settings</h1>
        <div className="w-10"></div>
      </div>
    </div>
  );
};
