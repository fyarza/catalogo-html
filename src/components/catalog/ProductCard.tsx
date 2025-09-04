import type { Product } from "@/types/clothing";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden relative bg-white rounded-lg shadow-sm transition-transform duration-300 transform group hover:scale-105">
      <div className="overflow-hidden w-full aspect-w-1 aspect-h-1">
        <img
          alt={product.alt}
          className="object-cover object-center w-full h-full"
          src={product.image}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.name}
          </a>
        </h3>
        <p className="mt-1 text-sm font-medium text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
