import { Heart, Star } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Effortless Style Hoodie",
    price: "$68.00",
    originalPrice: "$85.00",
    image: "product1",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Ultra High Rise Straight",
    price: "$89.00",
    image: "product2",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Real Good 90s Crop & Cargo",
    price: "$78.00",
    image: "product3",
    rating: 4.6,
    reviews: 203
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    price: "$95.00",
    originalPrice: "$120.00",
    image: "product4",
    rating: 4.7,
    reviews: 156
  }
];

export function FeaturedSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of trending pieces that define modern style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 relative">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {/* Placeholder for product image */}
                  <div className="text-gray-400 text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs">{product.image}</p>
                  </div>
                </div>
                
                {/* Wishlist button */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>

                {/* Sale badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
