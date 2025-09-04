import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilterOptions } from "@/types/clothing";

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function FilterSidebar({ filters, onFiltersChange, isOpen, onToggle }: FilterSidebarProps) {
  const [tempFilters, setTempFilters] = useState<FilterOptions>(filters);

  const categories = [
    { id: "tops", name: "Tops" },
    { id: "bottoms", name: "Pantalones" },
    { id: "dresses", name: "Vestidos" },
    { id: "outerwear", name: "Abrigos" },
    { id: "shoes", name: "Calzado" },
    { id: "accessories", name: "Accesorios" },
  ];

  const sizes = [
    { id: "xs", name: "XS" },
    { id: "s", name: "S" },
    { id: "m", name: "M" },
    { id: "l", name: "L" },
    { id: "xl", name: "XL" },
    { id: "xxl", name: "XXL" },
  ];

  const brands = [
    "Nike", "Adidas", "Zara", "H&M", "Forever 21", "Uniqlo", "Gap", "Levis"
  ];

  const colors = [
    { id: "black", name: "Negro", hex: "#000000" },
    { id: "white", name: "Blanco", hex: "#FFFFFF" },
    { id: "red", name: "Rojo", hex: "#EF4444" },
    { id: "blue", name: "Azul", hex: "#3B82F6" },
    { id: "green", name: "Verde", hex: "#10B981" },
    { id: "pink", name: "Rosa", hex: "#EC4899" },
    { id: "gray", name: "Gris", hex: "#6B7280" },
    { id: "brown", name: "Café", hex: "#A16207" },
  ];

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = tempFilters.categories.includes(categoryId)
      ? tempFilters.categories.filter(id => id !== categoryId)
      : [...tempFilters.categories, categoryId];
    
    setTempFilters({ ...tempFilters, categories: newCategories });
  };

  const handleSizeToggle = (sizeId: string) => {
    const newSizes = tempFilters.sizes.includes(sizeId)
      ? tempFilters.sizes.filter(id => id !== sizeId)
      : [...tempFilters.sizes, sizeId];
    
    setTempFilters({ ...tempFilters, sizes: newSizes });
  };

  const handleColorToggle = (colorId: string) => {
    const newColors = tempFilters.colors.includes(colorId)
      ? tempFilters.colors.filter(id => id !== colorId)
      : [...tempFilters.colors, colorId];
    
    setTempFilters({ ...tempFilters, colors: newColors });
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = tempFilters.brands.includes(brand)
      ? tempFilters.brands.filter(b => b !== brand)
      : [...tempFilters.brands, brand];
    
    setTempFilters({ ...tempFilters, brands: newBrands });
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    setTempFilters({
      ...tempFilters,
      priceRange: {
        ...tempFilters.priceRange,
        [type]: value
      }
    });
  };

  const applyFilters = () => {
    onFiltersChange(tempFilters);
    onToggle();
  };

  const clearFilters = () => {
    const clearedFilters: FilterOptions = {
      categories: [],
      priceRange: { min: 0, max: 1000 },
      sizes: [],
      colors: [],
      brands: [],
      inStock: false
    };
    setTempFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 lg:w-full
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        transition-transform duration-300 ease-in-out
        bg-background lg:bg-transparent
        border-r lg:border-r-0
        overflow-y-auto
      `}>
        <div className="p-6 lg:p-0 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtros
            </h2>
            <Button variant="ghost" size="icon" onClick={onToggle}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Categorías */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Categorías</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempFilters.categories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{category.name}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Rango de precio */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Precio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground">Mínimo</label>
                  <input
                    type="number"
                    value={tempFilters.priceRange.min}
                    onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                    className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    min="0"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Máximo</label>
                  <input
                    type="number"
                    value={tempFilters.priceRange.max}
                    onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                    className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                    min="0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tallas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tallas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Badge
                    key={size.id}
                    variant={tempFilters.sizes.includes(size.id) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleSizeToggle(size.id)}
                  >
                    {size.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Colores */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Colores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className={`
                      w-8 h-8 rounded-full border-2 cursor-pointer transition-transform
                      ${tempFilters.colors.includes(color.id) 
                        ? 'border-primary scale-110' 
                        : 'border-gray-300 hover:scale-105'
                      }
                    `}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleColorToggle(color.id)}
                    title={color.name}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Marcas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Marcas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempFilters.brands.includes(brand)}
                    onChange={() => handleBrandToggle(brand)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">{brand}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Solo en stock */}
          <Card>
            <CardContent className="pt-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tempFilters.inStock}
                  onChange={(e) => setTempFilters({ ...tempFilters, inStock: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">Solo productos en stock</span>
              </label>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="space-y-3 lg:hidden">
            <Button onClick={applyFilters} className="w-full">
              Aplicar Filtros
            </Button>
            <Button onClick={clearFilters} variant="outline" className="w-full">
              Limpiar Filtros
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
