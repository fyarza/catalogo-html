import { useFavoritesStore } from "@/stores/favoritesStore";

export function useFavorites() {
  return useFavoritesStore();
}
