import { useState, useMemo } from "react";
import { Filter, Grid, List, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ClothingCard } from "@/components/catalog/ClothingCard";
import { FilterSidebar } from "@/components/catalog/FilterSidebar";
import { ClothingItem, FilterOptions, SortBy } from "@/types/clothing";

// Datos de ejemplo (en una aplicación real, estos vendrían de una API)
const mockClothingItems: ClothingItem[] = [
  {
    id: "1",
    name: "Camiseta Básica de Algodón",
    description: "Camiseta cómoda y versátil para uso diario",
    price: 29.99,
    originalPrice: 39.99,
    category: { id: "tops", name: "Tops", slug: "tops" },
    subcategory: "Camisetas",
    brand: "H&M",
    sizes: [
      { id: "s", name: "Small", abbreviation: "S" },
      { id: "m", name: "Medium", abbreviation: "M" },
      { id: "l", name: "Large", abbreviation: "L" }
    ],
    colors: [
      { id: "white", name: "Blanco", hexCode: "#FFFFFF" },
      { id: "black", name: "Negro", hexCode: "#000000" },
      { id: "navy", name: "Azul Marino", hexCode: "#1E3A8A" }
    ],
    images: ["/api/placeholder/400/500"],
    inStock: true,
    stockQuantity: 25,
    tags: ["básico", "algodón", "casual"],
    rating: 4.5,
    reviewCount: 128,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20")
  },
  {
    id: "2",
    name: "Jeans Skinny Fit",
    description: "Jeans de corte ajustado con elastano para mayor comodidad",
    price: 79.99,
    category: { id: "bottoms", name: "Pantalones", slug: "bottoms" },
    subcategory: "Jeans",
    brand: "Levis",
    sizes: [
      { id: "xs", name: "Extra Small", abbreviation: "XS" },
      { id: "s", name: "Small", abbreviation: "S" },
      { id: "m", name: "Medium", abbreviation: "M" },
      { id: "l", name: "Large", abbreviation: "L" }
    ],
    colors: [
      { id: "indigo", name: "Índigo", hexCode: "#4F46E5" },
      { id: "black", name: "Negro", hexCode: "#000000" }
    ],
    images: ["/api/placeholder/400/500"],
    inStock: true,
    stockQuantity: 15,
    tags: ["jeans", "skinny", "elastano"],
    rating: 4.2,
    reviewCount: 89,
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-18")
  },
  {
    id: "3",
    name: "Vestido Floral de Verano",
    description: "Vestido ligero con estampado floral, perfecto para el verano",
    price: 89.99,
    originalPrice: 119.99,
    category: { id: "dresses", name: "Vestidos", slug: "dresses" },
    subcategory: "Vestidos Casuales",
    brand: "Zara",
    sizes: [
      { id: "xs", name: "Extra Small", abbreviation: "XS" },
      { id: "s", name: "Small", abbreviation: "S" },
      { id: "m", name: "Medium", abbreviation: "M" }
    ],
    colors: [
      { id: "floral-pink", name: "Floral Rosa", hexCode: "#F8BBD9" },
      { id: "floral-blue", name: "Floral Azul", hexCode: "#BFDBFE" }
    ],
    images: ["/api/placeholder/400/500"],
    inStock: false,
    stockQuantity: 0,
    tags: ["vestido", "floral", "verano"],
    rating: 4.7,
    reviewCount: 203,
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-22")
  }
];

export function CatalogPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: { min: 0, max: 1000 },
    sizes: [],
    colors: [],
    brands: [],
    inStock: false
  });
  
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEWEST);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Filtrar y ordenar productos
  const filteredAndSortedItems = useMemo(() => {
    let filtered = mockClothingItems.filter((item) => {
      // Filtro por categorías
      if (filters.categories.length > 0 && !filters.categories.includes(item.category.id)) {
        return false;
      }

      // Filtro por precio
      if (item.price < filters.priceRange.min || item.price > filters.priceRange.max) {
        return false;
      }

      // Filtro por tallas
      if (filters.sizes.length > 0 && !item.sizes.some(size => filters.sizes.includes(size.id))) {
        return false;
      }

      // Filtro por colores
      if (filters.colors.length > 0 && !item.colors.some(color => filters.colors.includes(color.id))) {
        return false;
      }

      // Filtro por marcas
      if (filters.brands.length > 0 && !filters.brands.includes(item.brand)) {
        return false;
      }

      // Filtro por stock
      if (filters.inStock && !item.inStock) {
        return false;
      }

      return true;
    });

    // Ordenar
    switch (sortBy) {
      case SortBy.PRICE_LOW_TO_HIGH:
        filtered.sort((a, b) => a.price - b.price);
        break;
      case SortBy.PRICE_HIGH_TO_LOW:
        filtered.sort((a, b) => b.price - a.price);
        break;
      case SortBy.BEST_RATING:
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case SortBy.MOST_POPULAR:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case SortBy.OLDEST:
        filtered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
        break;
      case SortBy.NEWEST:
      default:
        filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const handleAddToCart = (item: ClothingItem) => {
    console.log("Agregar al carrito:", item.name);
    // Aquí implementarías la lógica del carrito
  };

  const handleToggleFavorite = (item: ClothingItem) => {
    setFavorites(prev => 
      prev.includes(item.id) 
        ? prev.filter(id => id !== item.id)
        : [...prev, item.id]
    );
  };

  const sortOptions = [
    { value: SortBy.NEWEST, label: "Más recientes" },
    { value: SortBy.OLDEST, label: "Más antiguos" },
    { value: SortBy.PRICE_LOW_TO_HIGH, label: "Precio: Menor a mayor" },
    { value: SortBy.PRICE_HIGH_TO_LOW, label: "Precio: Mayor a menor" },
    { value: SortBy.BEST_RATING, label: "Mejor valorados" },
    { value: SortBy.MOST_POPULAR, label: "Más populares" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar de filtros */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtros
            </h2>
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 min-w-0">
          {/* Header con controles */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Catálogo de Prendas</h1>
              <p className="text-muted-foreground">
                {filteredAndSortedItems.length} productos encontrados
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Botón de filtros para móvil */}
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>

              {/* Selector de ordenamiento */}
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortBy)}>
                <SelectTrigger className="w-48">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Toggle de vista */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Grid de productos */}
          {filteredAndSortedItems.length > 0 ? (
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
              }
            `}>
              {filteredAndSortedItems.map((item) => (
                <ClothingCard
                  key={item.id}
                  item={item}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favorites.includes(item.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                No se encontraron productos que coincidan con los filtros seleccionados.
              </p>
              <Button onClick={() => setFilters({
                categories: [],
                priceRange: { min: 0, max: 1000 },
                sizes: [],
                colors: [],
                brands: [],
                inStock: false
              })}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar de filtros para móvil */}
      <FilterSidebar
        filters={filters}
        onFiltersChange={setFilters}
        isOpen={isFilterOpen}
        onToggle={() => setIsFilterOpen(!isFilterOpen)}
      />
    </div>
  );
}
