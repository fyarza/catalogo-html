import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onToggleSidebar?: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  searchTerm,
  onSearchChange,
  onToggleSidebar,
}) => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/80 border-b border-gray-200">
      {/* Header desktop */}
      <div className="hidden lg:flex justify-between items-center p-4 pb-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="mr-4"
          >
            <span className="material-icons text-gray-500">menu</span>
          </Button>

          <div className="relative">
            <span className="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2 material-icons">
              search
            </span>
            <Input
              className="pl-10 pr-20 w-64"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 px-1.5 py-0.5 text-xs font-semibold text-gray-400 rounded-sm border border-gray-300 -translate-y-1/2">
              ⌘K
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notificaciones */}
          <Button variant="ghost" size="icon" className="relative">
            <span className="material-icons text-gray-600">notifications</span>
          </Button>

          {/* Mensajes */}
          <Button variant="ghost" size="icon" className="relative">
            <span className="material-icons text-gray-600">chat_bubble</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          {/* Perfil de usuario */}
          <Button variant="ghost" size="icon">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="material-icons text-gray-600 text-sm">
                person
              </span>
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};
