import React, { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { ProductTable } from "@/components/admin/ProductTable";
import { MobileBottomNav } from "@/components/admin/MobileBottomNav";
import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { products } from "@/data/products";
import type { Product } from "@/types/clothing";

export const AdminPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("products");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Cerrar sidebar en móvil después de navegar
    setSidebarOpen(false);
  };

  const handleToggleSidebar = () => {
    // En móvil: alternar la visibilidad del sidebar
    if (window.innerWidth < 1024) {
      setSidebarOpen(!sidebarOpen);
    } else {
      // En desktop: alternar el estado colapsado
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const handleEditProduct = (product: Product) => {
    console.log("Editar producto:", product);
    // Aquí implementarías la lógica para editar el producto
  };

  const handleDeleteProduct = (productId: string) => {
    console.log("Eliminar producto:", productId);
    // Aquí implementarías la lógica para eliminar el producto
  };

  const handleAddProduct = () => {
    console.log("Agregar nuevo producto");
    // Aquí implementarías la lógica para agregar un nuevo producto
  };

  const renderContent = () => {
    switch (currentPage) {
      case "products":
        return (
          <ProductTable
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            onAddProduct={handleAddProduct}
          />
        );
      case "add-product":
        return (
          <>
            <div className="lg:hidden">
              <div className="flex justify-between items-center p-4 pb-3">
                <div className="w-10"></div>
                <h1 className="flex-1 text-xl font-bold text-center">
                  Agregar Producto
                </h1>
                <div className="w-10"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="hidden lg:block text-2xl font-bold text-gray-900">
                Agregar Producto
              </h2>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">
                  Formulario para agregar nuevo producto (próximamente)
                </p>
              </div>
            </div>
          </>
        );
      case "orders":
        return (
          <>
            <div className="lg:hidden">
              <div className="flex justify-between items-center p-4 pb-3">
                <div className="w-10"></div>
                <h1 className="flex-1 text-xl font-bold text-center">
                  Pedidos
                </h1>
                <div className="w-10"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="hidden lg:block text-2xl font-bold text-gray-900">
                Pedidos
              </h2>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">Lista de pedidos (próximamente)</p>
              </div>
            </div>
          </>
        );
      case "analytics":
        return (
          <>
            <div className="lg:hidden">
              <div className="flex justify-between items-center p-4 pb-3">
                <div className="w-10"></div>
                <h1 className="flex-1 text-xl font-bold text-center">
                  Analíticas
                </h1>
                <div className="w-10"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="hidden lg:block text-2xl font-bold text-gray-900">
                Analíticas
              </h2>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">
                  Dashboard de analíticas (próximamente)
                </p>
              </div>
            </div>
          </>
        );
      case "customers":
        return (
          <>
            <div className="lg:hidden">
              <div className="flex justify-between items-center p-4 pb-3">
                <div className="w-10"></div>
                <h1 className="flex-1 text-xl font-bold text-center">
                  Clientes
                </h1>
                <div className="w-10"></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="hidden lg:block text-2xl font-bold text-gray-900">
                Clientes
              </h2>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">
                  Lista de clientes (próximamente)
                </p>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <DashboardHeader />
            <div className="space-y-6">
              <h2 className="hidden lg:block text-2xl font-bold text-gray-900">
                Dashboard
              </h2>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">Panel principal (próximamente)</p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
      />

      {/* Contenido principal */}
      <main
        className={`flex-1 p-4 lg:p-8 transition-all duration-300 pb-16 lg:pb-8 ${
          sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
        }`}
      >
        {/* Header solo en desktop */}
        <div className="hidden lg:block">
          <AdminHeader
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onToggleSidebar={handleToggleSidebar}
          />
        </div>

        <div className="mt-4 lg:mt-8">{renderContent()}</div>
      </main>

      {/* Navegación móvil inferior */}
      <MobileBottomNav currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
};
