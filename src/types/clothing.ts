// Tipos para el catálogo de prendas de vestir

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
}

export interface ClothingItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ClothingCategory;
  subcategory: string;
  brand: string;
  sizes: Size[];
  colors: Color[];
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ClothingCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Size {
  id: string;
  name: string;
  abbreviation: string;
}

export interface Color {
  id: string;
  name: string;
  hexCode: string;
}

export interface CartItem {
  id: string;
  clothingItem: ClothingItem;
  selectedSize: Size;
  selectedColor: Color;
  quantity: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  sizes: string[];
  colors: string[];
  brands: string[];
  inStock: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}

// Enums para valores predefinidos
export enum ClothingType {
  TOPS = "tops",
  BOTTOMS = "bottoms",
  DRESSES = "dresses",
  OUTERWEAR = "outerwear",
  SHOES = "shoes",
  ACCESSORIES = "accessories",
}

export enum SortBy {
  NEWEST = "newest",
  OLDEST = "oldest",
  PRICE_LOW_TO_HIGH = "price_low_to_high",
  PRICE_HIGH_TO_LOW = "price_high_to_low",
  MOST_POPULAR = "most_popular",
  BEST_RATING = "best_rating",
}
