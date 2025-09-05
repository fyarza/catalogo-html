import type { Product } from "@/types/clothing";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden relative bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/20 transition-all duration-300 transform group hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-900/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden w-full aspect-w-1 aspect-h-1 relative">
        <img
          alt={product.alt}
          className={`object-cover object-center w-full h-full transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          src={product.image}
          loading="lazy"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div
        className={`absolute top-2 right-2 transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <button className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200">
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-300"
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
        </button>
      </div>
    </div>
  );
}
