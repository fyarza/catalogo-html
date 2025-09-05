import React from "react";

interface MobileBottomNavProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage = "products",
  onNavigate,
}) => {
  const navItems = [
    {
      id: "dashboard",
      label: "Home",
      icon: "home",
      active: currentPage === "dashboard",
    },
    {
      id: "products",
      label: "Products",
      icon: "inventory_2",
      active: currentPage === "products",
    },
    {
      id: "add-product",
      label: "Add",
      icon: "add_circle",
      active: currentPage === "add-product",
    },
    {
      id: "analytics",
      label: "Settings",
      icon: "settings",
      active: currentPage === "analytics",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-100 backdrop-blur-sm bg-white/80 lg:hidden safe-area-bottom">
      <nav className="flex justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate?.(item.id)}
            className={`flex flex-col items-center justify-end gap-1 w-full transition-colors ${
              item.active
                ? "text-blue-600 font-semibold"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            <span
              className="material-icons"
              style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="bg-white h-safe-area-bottom"></div>
    </footer>
  );
};
