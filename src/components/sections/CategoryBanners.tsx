export function CategoryBanners() {
  const categories = [
    {
      id: 1,
      title: "It's In The Bag:",
      subtitle: "Limited Deals",
      description: "Exclusive handbag collection with up to 40% off",
      buttonText: "SHOP BAGS",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      title: "Make A Statement",
      subtitle: "This Season",
      description: "Bold pieces that speak your style language",
      buttonText: "SHOP NOW",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className={`${category.bgColor} rounded-2xl p-8 lg:p-12 relative overflow-hidden`}>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <h4 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
                  {category.subtitle}
                </h4>
                <p className="text-gray-600 mb-6 max-w-sm">
                  {category.description}
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                  {category.buttonText}
                </button>
              </div>
              
              {/* Decorative product placeholder */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-32 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs">Product</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
