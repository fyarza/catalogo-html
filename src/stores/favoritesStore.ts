import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/clothing";

interface FavoritesState {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorites: (product: Product) => {
        set((state) => {
          if (state.favorites.find((p) => p.id === product.id)) {
            return state; // Ya existe, no agregar duplicado
          }
          return { favorites: [...state.favorites, product] };
        });
      },

      removeFromFavorites: (productId: string) => {
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== productId),
        }));
      },

      toggleFavorite: (product: Product) => {
        set((state) => {
          const isCurrentlyFavorite = state.favorites.find(
            (p) => p.id === product.id
          );
          if (isCurrentlyFavorite) {
            return {
              favorites: state.favorites.filter((p) => p.id !== product.id),
            };
          } else {
            return { favorites: [...state.favorites, product] };
          }
        });
      },

      isFavorite: (productId: string) => {
        return get().favorites.some((p) => p.id === productId);
      },

      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: "favorites-storage", // nombre único para el localStorage
      version: 1, // versión del store para migraciones futuras
    }
  )
);
