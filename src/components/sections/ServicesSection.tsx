import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on all orders over $75"
    },
    {
      icon: RotateCcw,
      title: "Secured Payment",
      description: "Your payment information is processed securely"
    },
    {
      icon: Shield,
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Contact us 24 hours a day, 7 days a week"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
