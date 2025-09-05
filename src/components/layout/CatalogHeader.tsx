import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { TextAnimate } from "@/components/ui/text-animate";

interface CatalogHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function CatalogHeader({
  searchTerm,
  onSearchChange,
}: CatalogHeaderProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <header className="py-6 mb-8">
      {/* Layout móvil: Título y Toggle arriba, Navegación abajo */}
      <div className="block md:hidden">
        {/* Header superior: Título y Toggle */}
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
          <AnimatedThemeToggler />
        </div>

        {/* Navegación inferior: Enlace y Búsqueda */}
        <nav className="flex flex-col space-y-3">
          <a
            className="text-base font-medium text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:scale-105"
            href="#"
          >
            Novedades
          </a>
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
          <AnimatedThemeToggler />
        </nav>
      </div>
    </header>
  );
}
