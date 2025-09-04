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
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800">
          Vístete
        </h1>
        <nav className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
          <a
            className="text-base font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            Novedades
          </a>
          <div className="relative">
            <input
              className="px-4 py-2 w-full rounded-full border border-gray-300 sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Buscar productos..."
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 text-gray-400 transform -translate-y-1/2 hover:text-gray-600"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
