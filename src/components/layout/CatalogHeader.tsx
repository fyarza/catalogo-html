import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { TextAnimate } from "@/components/ui/text-animate";
import { FavoritesModal } from "@/components/ui/favorites-modal";
import { useFavorites } from "@/hooks/useFavorites";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CatalogHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function CatalogHeader({
  searchTerm,
  onSearchChange,
}: CatalogHeaderProps) {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const { favorites } = useFavorites();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <header className="py-6 mb-8">
      {/* Layout móvil: Título y Toggle arriba, Navegación abajo */}
      <div className="block md:hidden">
        {/* Header superior: Título, Favoritos y Toggle */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800 transition-colors duration-300 dark:text-gray-100">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              delay={0.2}
              duration={0.5}
              as="span"
              className="inline-block"
            >
              Vístete
            </TextAnimate>
          </h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
              aria-label="Ver favoritos"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {favorites.length}
                </span>
              )}
            </button>
            <AnimatedThemeToggler />
          </div>
        </div>

        {/* Navegación inferior: Enlace y Búsqueda */}
        <nav className="flex flex-col space-y-3">
          <a
            className="text-base font-medium text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-105"
            href="#"
          >
            Novedades
          </a>
          <Link
            to="/admin"
            className="text-base font-medium text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 flex items-center gap-1"
          >
            <span className="material-icons text-sm">admin_panel_settings</span>
            Admin
          </Link>
          <div className="relative group">
            <input
              className="px-4 py-2 w-full rounded-full border border-gray-300 transition-all duration-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 group-hover:shadow-lg group-hover:scale-105"
              placeholder="Buscar productos..."
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 text-gray-400 transition-colors duration-200 transform -translate-y-1/2 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:scale-110"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* Layout desktop: Todo en una fila horizontal */}
      <div className="hidden md:flex md:justify-between md:items-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 transition-colors duration-300 dark:text-gray-100">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            delay={0.2}
            duration={0.5}
            as="span"
            className="inline-block"
          >
            Vístete
          </TextAnimate>
        </h1>

        <nav className="flex items-center space-x-8">
          <a
            className="text-base font-medium text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-105"
            href="#"
          >
            Novedades
          </a>
          <Link
            to="/admin"
            className="text-base font-medium text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 flex items-center gap-1"
          >
            <span className="material-icons text-sm">admin_panel_settings</span>
            Admin
          </Link>
          <div className="relative group">
            <input
              className="px-4 py-2 w-64 rounded-full border border-gray-300 transition-all duration-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 group-hover:shadow-lg group-hover:scale-105"
              placeholder="Buscar productos..."
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 text-gray-400 transition-colors duration-200 transform -translate-y-1/2 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:scale-110"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
          <button
            onClick={() => setIsFavoritesOpen(true)}
            className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
            aria-label="Ver favoritos"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {favorites.length}
              </span>
            )}
          </button>
          <AnimatedThemeToggler />
        </nav>
      </div>

      {/* Modal de Favoritos */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
      />
    </header>
  );
}
