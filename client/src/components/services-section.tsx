import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "🚀",
    title: "Quick Setup & Launch",
    description: "Get your online ordering system up and running in just 24 hours with our guided setup process.",
  },
  {
    icon: "🎧",
    title: "24/7 Customer Support",
    description: "Round-the-clock support to ensure your restaurant operations never skip a beat.",
  },
  {
    icon: "🔄",
    title: "Regular Updates",
    description: "Continuous platform improvements and new features based on industry trends and feedback.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description: "Bank-level security with data encryption and compliance with industry standards.",
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-green-light/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="gradient-text">Restaurant</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to digitize and grow your restaurant business, all in one powerful platform.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4"
                  data-testid={`service-${index}`}
                >
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center lg:text-left">
            <div className="inline-block p-8 bg-white rounded-3xl shadow-2xl hover-lift">
              <div className="w-full h-64 bg-gradient-to-br from-brand-green/10 to-brand-green-light/10 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🏪</div>
                  <div className="text-lg font-medium">Modern Restaurant Setup</div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Join 1000+ Restaurants</h4>
                <p className="text-gray-600">Already growing their business with RestaurantOS</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            className="cta-button text-white px-12 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-3"
            data-testid="button-start-transformation"
          >
            <span>Start Your Digital Transformation</span>
            <span>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
