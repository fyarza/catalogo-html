import { useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { ProductCard } from "@/components/catalog/ProductCard";
import { BlurFade } from "@/components/ui/blur-fade";

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FavoritesModal({ isOpen, onClose }: FavoritesModalProps) {
  const { favorites, clearFavorites } = useFavorites();
  const [isClearing, setIsClearing] = useState(false);

  const handleClearFavorites = async () => {
    setIsClearing(true);
    // Pequeño delay para mostrar la animación
    await new Promise((resolve) => setTimeout(resolve, 300));
    clearFavorites();
    setIsClearing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <BlurFade
        delay={0.1}
        duration={0.4}
        offset={20}
        direction="up"
        inView={true}
      >
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-600 dark:text-red-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Mis Favoritos
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {favorites.length} producto{favorites.length !== 1 ? "s" : ""}{" "}
                  guardado{favorites.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {favorites.length > 0 && (
                <button
                  onClick={handleClearFavorites}
                  disabled={isClearing}
                  className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {isClearing ? "Limpiando..." : "Limpiar todo"}
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Cerrar"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 text-gray-300 dark:text-gray-600">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                  >
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No tienes favoritos aún
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Haz clic en el corazón de los productos que te gusten para
                  agregarlos aquí
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                >
                  Explorar productos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((product, index) => (
                  <BlurFade
                    key={product.id}
                    delay={index * 0.1}
                    duration={0.4}
                    offset={20}
                    direction="up"
                    inView={true}
                  >
                    <ProductCard product={product} />
                  </BlurFade>
                ))}
              </div>
            )}
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
