import DeviceMockups from "./device-mockups";
import FeatureCards from "./feature-cards";

const adminFeatures = [
  {
    icon: "📊",
    title: "Advanced Analytics",
    description: "Detailed insights on sales, customer behavior, and performance metrics.",
    testId: "feature-advanced-analytics"
  },
  {
    icon: "🍽️",
    title: "Menu Management",
    description: "Easy menu updates, pricing control, and inventory management in real-time.",
    testId: "feature-menu-management"
  },
  {
    icon: "👥",
    title: "Staff Management",
    description: "Role-based access control and staff performance tracking tools.",
    testId: "feature-staff-management"
  },
  {
    icon: "🚚",
    title: "Delivery Management",
    description: "Route optimization and delivery partner coordination for faster service.",
    testId: "feature-delivery-management"
  },
  {
    icon: "🔔",
    title: "Smart Notifications",
    description: "Real-time alerts for new orders, inventory, and critical business events.",
    testId: "feature-smart-notifications"
  },
  {
    icon: "⚙️",
    title: "Custom Settings",
    description: "Flexible configuration options to match your restaurant's unique workflow.",
    testId: "feature-custom-settings"
  }
];

export default function AdminDashboard() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Admin <span className="gradient-text">Control</span> Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive management tools to run your restaurant efficiently with real-time 
            insights and complete operational control.
          </p>
        </div>
        
        {/* Interactive Device Mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          <DeviceMockups 
            type="monitor"
            interactive={true}
            content="Admin Analytics Dashboard"
            onClick={() => console.log('Admin monitor clicked')}
          />
          
          <DeviceMockups 
            type="mobile"
            interactive={true}
            content="Admin Mobile App"
            onClick={() => console.log('Admin mobile clicked')}
          />
        </div>
        
        <FeatureCards features={adminFeatures} />
      </div>
    </section>
  );
}
