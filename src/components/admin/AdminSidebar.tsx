import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";

interface AdminSidebarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  currentPage = "products",
  onNavigate,
  isOpen = false,
  onClose,
  isCollapsed = false,
}) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "dashboard",
      section: "Dashboards",
    },
    {
      id: "products",
      label: "Lista de Productos",
      icon: "list_alt",
      section: "E-commerce",
    },
    {
      id: "add-product",
      label: "Agregar Producto",
      icon: "add_shopping_cart",
      section: "E-commerce",
    },
    {
      id: "orders",
      label: "Lista de Pedidos",
      icon: "shopping_cart",
      section: "E-commerce",
    },
    {
      id: "analytics",
      label: "Analíticas",
      icon: "trending_up",
      section: "Análisis",
    },
    {
      id: "customers",
      label: "Clientes",
      icon: "group",
      section: "Análisis",
    },
  ];

  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  return (
    <>
      {/* Overlay para móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`flex flex-col bg-gray-900 border-r border-gray-700 h-screen fixed inset-y-0 left-0 z-50 transform transition-all duration-300 ease-in-out ${
          // En móvil: mostrar solo si isOpen es true
          // En desktop: siempre visible, pero colapsado si isCollapsed es true
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${
          // Ancho del sidebar - en móvil siempre ancho completo, en desktop depende de isCollapsed
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header */}
        <div
          className={`p-4 border-b border-gray-700 ${
            isCollapsed ? "hidden" : ""}`}
        >
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          <p className="text-sm text-gray-400">Catálogo de Prendas</p>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-1 p-4 ${isCollapsed ? "space-y-2" : "space-y-6"}`}
        >
          {Object.entries(groupedItems).map(([section, items]) => (
            <div key={section}>
              {!isCollapsed && (
                <h2 className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  {section}
                </h2>
              )}
              <div className="space-y-1">
                {items.map((item) => {
                  const buttonContent = (
                    <button
                      key={item.id}
                      onClick={() => onNavigate?.(item.id)}
                      className={`w-full flex items-center rounded-md text-left transition-colors ${
                        isCollapsed ? "justify-center p-2" : "p-2"
                      } ${
                        currentPage === item.id
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <span
                        className={`text-gray-300 material-icons text-lg ${
                          isCollapsed ? "":"mr-3"}`}
                      >
                        {item.icon}
                      </span>
                      {!isCollapsed && (
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </button>
                  );

                  return isCollapsed ? (
                    <Tooltip
                      key={item.id}
                      content={item.label}
                      position="right"
                    >
                      {buttonContent}
                    </Tooltip>
                  ) : (
                    buttonContent
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 mt-auto border-t border-gray-700">
            <Card className="p-4 bg-gray-50">
              <h3 className="text-sm font-bold text-gray-900">Descargar</h3>
              <p className="mt-1 text-xs text-gray-600">
                Acceso completo a todas las funcionalidades del panel de
                administración.
              </p>
              <Button className="mt-4 w-full" size="sm">
                Obtener Pro
              </Button>
            </Card>

            {/* User Profile */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <div className="flex justify-center items-center w-8 h-8 bg-gray-300 rounded-full">
                  <span className="text-sm text-gray-600 material-icons">
                    person
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">admin@catalogo.com</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <span className="text-gray-500 material-icons">more_horiz</span>
              </Button>
            </div>
          </div>
        )}

        {/* User Profile Colapsado */}
        {isCollapsed && (
          <div className="p-2 mt-auto border-t border-gray-700">
            <div className="flex justify-center">
              <Tooltip content="Admin - admin@catalogo.com" position="right">
                <div className="flex justify-center items-center w-8 h-8 bg-gray-600 rounded-full transition-colors cursor-pointer hover:bg-gray-500">
                  <span className="text-sm text-gray-300 material-icons">
                    person
                  </span>
                </div>
              </Tooltip>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
