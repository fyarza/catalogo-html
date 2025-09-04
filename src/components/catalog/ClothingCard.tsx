import { Heart, ShoppingBag, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClothingItem } from "@/types/clothing";
import { cn } from "@/lib/utils";

interface ClothingCardProps {
  item: ClothingItem;
  onAddToCart?: (item: ClothingItem) => void;
  onToggleFavorite?: (item: ClothingItem) => void;
  isFavorite?: boolean;
}

export function ClothingCard({ 
  item, 
  onAddToCart, 
  onToggleFavorite, 
  isFavorite = false 
}: ClothingCardProps) {
  const hasDiscount = item.originalPrice && item.originalPrice > item.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((item.originalPrice! - item.price) / item.originalPrice!) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={item.images[0] || "/placeholder.jpg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!item.inStock && (
            <Badge variant="destructive">Agotado</Badge>
          )}
          {hasDiscount && (
            <Badge variant="secondary">-{discountPercentage}%</Badge>
          )}
        </div>

        {/* Botón de favorito */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          onClick={() => onToggleFavorite?.(item)}
        >
          <Heart 
            className={cn(
              "h-4 w-4",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            )} 
          />
        </Button>

        {/* Overlay con botones de acción */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="w-full p-4">
            <Button 
              className="w-full"
              onClick={() => onAddToCart?.(item)}
              disabled={!item.inStock}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              {item.inStock ? "Agregar al Carrito" : "Agotado"}
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          {/* Marca */}
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            {item.brand}
          </p>

          {/* Nombre del producto */}
          <h3 className="font-semibold text-base line-clamp-2 min-h-[3rem]">
            {item.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3",
                    i < Math.floor(item.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({item.reviewCount})
            </span>
          </div>

          {/* Precio */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">
              ${item.price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${item.originalPrice!.toFixed(2)}
              </span>
            )}
          </div>

          {/* Colores disponibles */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Colores:</span>
            <div className="flex gap-1">
              {item.colors.slice(0, 4).map((color) => (
                <div
                  key={color.id}
                  className="w-3 h-3 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hexCode }}
                  title={color.name}
                />
              ))}
              {item.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">
                  +{item.colors.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
