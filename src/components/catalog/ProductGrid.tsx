import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/clothing";

interface ProductGridProps {
  products: Product[];
  searchTerm?: string;
}

export function ProductGrid({ products, searchTerm }: ProductGridProps) {
  const hasResults = products.length > 0;
  const isSearching = searchTerm && searchTerm.trim().length > 0;

  return (
    <main id="product-catalog">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-800">
          {isSearching ? `Resultados para "${searchTerm}"` : "Nuestro Catálogo"}
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          {isSearching
            ? `${products.length} producto${
                products.length !== 1 ? "s" : ""
              } encontrado${products.length !== 1 ? "s" : ""}`
            : "Descubre nuestra colección exclusiva"}
        </p>
      </div>

      {hasResults ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : isSearching ? (
        <div className="text-center py-16">
          <div className="mx-auto w-24 h-24 mb-6 text-gray-300">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-gray-600 mb-4">
            No hay productos que coincidan con "{searchTerm}"
          </p>
          <p className="text-sm text-gray-500">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      ) : null}
    </main>
  );
}
