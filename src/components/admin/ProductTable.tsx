import React, { useState } from "react";
import type { Product } from "@/types/clothing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ProductTableProps {
  products: Product[];
  onEdit?: (product: Product) => void;
  onDelete?: (productId: string) => void;
  onAddProduct?: () => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
  onAddProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && product.price > 0) ||
      (statusFilter === "inactive" && product.price === 0);
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "low" && product.price < 100) ||
      (priceFilter === "medium" &&
        product.price >= 100 &&
        product.price < 200) ||
      (priceFilter === "high" && product.price >= 200);

    return matchesSearch && matchesStatus && matchesPrice;
  });

  const getStatusBadge = (product: Product) => {
    if (product.price === 0) {
      return <Badge variant="destructive">Sin Stock</Badge>;
    }
    if (product.price < 100) {
      return <Badge variant="secondary">Oferta</Badge>;
    }
    return <Badge variant="default">Activo</Badge>;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Header móvil */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center p-4 pb-3">
          <div className="w-10"></div>
          <h1 className="flex-1 text-xl font-bold text-center">Productos</h1>
          <button
            className="flex justify-center items-center text-gray-700 rounded-full size-10 hover:bg-gray-100"
            onClick={onAddProduct}
          >
            <span className="text-2xl material-icons">add</span>
          </button>
        </div>
        <div className="px-4 pb-3">
          <div className="relative">
            <span className="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2 material-icons">
              search
            </span>
            <Input
              className="pl-10 w-full rounded-lg border-0 bg-gray-100 py-3 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex overflow-x-auto gap-2 px-4 pb-3">
          <button className="flex gap-x-2 justify-center items-center px-4 h-9 text-sm font-medium text-gray-800 bg-gray-100 rounded-full shrink-0">
            <span>Status</span>
            <span className="text-xl material-icons">expand_more</span>
          </button>
          <button className="flex gap-x-2 justify-center items-center px-4 h-9 text-sm font-medium text-gray-800 bg-gray-100 rounded-full shrink-0">
            <span>Price</span>
            <span className="text-xl material-icons">expand_more</span>
          </button>
          <button className="flex gap-x-2 justify-center items-center px-4 h-9 text-sm font-medium text-gray-800 bg-gray-100 rounded-full shrink-0">
            <span>Category</span>
            <span className="text-xl material-icons">expand_more</span>
          </button>
        </div>
      </div>

      {/* Header desktop */}
      <div className="hidden lg:flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Productos</h2>
        <Button onClick={onAddProduct} className="flex items-center gap-2">
          <span className="material-icons text-sm">add</span>
          Agregar Producto
        </Button>
      </div>

      {/* Filtros y búsqueda */}
      <Card className="p-4">
        {/* Búsqueda - Siempre visible */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2 material-icons">
            search
          </span>
          <Input
            className="pl-10 w-full"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtros - Scroll horizontal en móvil */}
        <div className="flex overflow-x-auto gap-2 pb-2 mobile-scroll">
          <button
            className={`flex gap-x-2 justify-center items-center px-4 h-9 text-sm font-medium rounded-full shrink-0 ${
              statusFilter === "all"
                ? "text-blue-800 bg-blue-100"
                : "text-gray-800 bg-gray-100"
            }`}
            onClick={() => setStatusFilter("all")}
          >
            <span>Estado</span>
            <span className="material-icons text-xl">expand_more</span>
          </button>
          <button
            className={`flex gap-x-2 justify-center items-center px-4 h-9 text-sm font-medium rounded-full shrink-0 ${
              priceFilter === "all"
                ? "text-blue-800 bg-blue-100"
                : "text-gray-800 bg-gray-100"
            }`}
            onClick={() => setPriceFilter("all")}
          >
            <span>Precio</span>
            <span className="material-icons text-xl">expand_more</span>
          </button>
          <button className="flex gap-x-2 justify-center items-center px-4 h-9 text-sm font-medium text-gray-800 bg-gray-100 rounded-full shrink-0">
            <span>Categoría</span>
            <span className="material-icons text-xl">expand_more</span>
          </button>
        </div>

        {/* Selectores ocultos para funcionalidad */}
        <div className="hidden">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos los estados</option>
            <option value="active">Activo</option>
            <option value="inactive">Inactivo</option>
          </select>
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">Todos los precios</option>
            <option value="low">Menos de €100</option>
            <option value="medium">€100 - €200</option>
            <option value="high">Más de €200</option>
          </select>
        </div>
      </Card>

      {/* Vista Desktop - Tabla */}
      <Card className="hidden lg:block">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 w-12">
                  <input className="rounded border-gray-300" type="checkbox" />
                </th>
                <th className="p-4 font-medium text-left text-gray-600 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    Nombre del Producto
                    <span className="material-icons text-base">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-600">
                  <div className="flex items-center gap-2">
                    Precio
                    <span className="material-icons text-base">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th className="p-4 font-medium text-left text-gray-600">
                  <div className="flex items-center gap-2">
                    Estado
                    <span className="material-icons text-base">
                      unfold_more
                    </span>
                  </div>
                </th>
                <th className="p-4 w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <input
                      className="rounded border-gray-300"
                      type="checkbox"
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="object-cover mr-4 w-10 h-10 rounded-md"
                      />
                      <span className="font-medium text-gray-900">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">
                    {formatPrice(product.price)}
                  </td>
                  <td className="p-4">{getStatusBadge(product)}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit?.(product)}
                        className="h-8 w-8"
                      >
                        <span className="material-icons text-sm">edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete?.(product.id)}
                        className="h-8 w-8 text-red-600 hover:text-red-700"
                      >
                        <span className="material-icons text-sm">delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Vista Móvil - Lista de tarjetas */}
      <div className="lg:hidden">
        <ul className="divide-y divide-gray-100">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="flex gap-4 items-center p-4 hover:bg-gray-50"
            >
              <input
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                type="checkbox"
              />
              <div
                className="bg-center bg-no-repeat bg-cover rounded-lg aspect-square size-14"
                style={{
                  backgroundImage: `url('${product.image}')`,
                }}
              />
              <div className="flex-grow">
                <p className="font-semibold text-gray-900 text-sm">
                  {product.name}
                </p>
                <div className="flex gap-2 items-center mt-1">
                  <p className="text-sm text-gray-500">
                    {formatPrice(product.price)}
                  </p>
                  {getStatusBadge(product)}
                </div>
              </div>
              <button
                className="flex justify-center items-center text-gray-500 rounded-full size-10 hover:bg-gray-100"
                onClick={() => onEdit?.(product)}
              >
                <span className="material-icons">more_vert</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mensaje cuando no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <span className="material-icons text-4xl mb-2 block">
              inventory_2
            </span>
            <p>No se encontraron productos</p>
          </div>
        )}
      </div>

      {/* Información de resultados */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>
          Mostrando {filteredProducts.length} de {products.length} productos
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <span className="material-icons text-sm">chevron_left</span>
          </Button>
          <span>Página 1 de 1</span>
          <Button variant="outline" size="sm">
            <span className="material-icons text-sm">chevron_right</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
