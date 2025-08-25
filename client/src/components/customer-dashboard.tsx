import DeviceMockups from "./device-mockups";
import FeatureCards from "./feature-cards";

const customerFeatures = [
  {
    icon: "📱",
    title: "Mobile Optimized",
    description: "Responsive design that works perfectly on all devices with touch-friendly interfaces.",
    testId: "feature-mobile-optimized"
  },
  {
    icon: "🛒",
    title: "Smart Cart",
    description: "Intelligent cart system with recommendations and easy modification options.",
    testId: "feature-smart-cart"
  },
  {
    icon: "💳",
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security and fraud protection.",
    testId: "feature-secure-payments"
  },
  {
    icon: "⏰",
    title: "Real-time Tracking",
    description: "Live order tracking from kitchen to doorstep with accurate delivery estimates.",
    testId: "feature-real-time-tracking"
  },
  {
    icon: "⭐",
    title: "Reviews & Ratings",
    description: "Customer feedback system to help improve service quality and build trust.",
    testId: "feature-reviews-ratings"
  },
  {
    icon: "🔄",
    title: "Quick Reorder",
    description: "One-click reordering of favorite meals with saved preferences and addresses.",
    testId: "feature-quick-reorder"
  }
];

export default function CustomerDashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Customer <span className="gradient-text">Experience</span> Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Give your customers the ultimate ordering experience with our intuitive dashboard 
            that works seamlessly across all devices.
          </p>
        </div>
        
        {/* Interactive Device Mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          <DeviceMockups 
            type="monitor"
            interactive={true}
            content="Customer Menu Dashboard"
            onClick={() => console.log('Monitor clicked')}
          />
          
          <DeviceMockups 
            type="mobile"
            interactive={true}
            content="Customer Mobile App"
            onClick={() => console.log('Mobile clicked')}
          />
        </div>
        
        <FeatureCards features={customerFeatures} />
      </div>
    </section>
  );
}
