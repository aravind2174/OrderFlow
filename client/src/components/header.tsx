import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div 
              className="h-10 w-32 bg-brand-green rounded-lg flex items-center justify-center"
              data-testid="logo-brand"
            >
              <span className="text-white font-bold text-lg">RestaurantOS</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            className="cta-button text-white px-6 py-2 rounded-lg font-semibold"
            data-testid="button-start-trial-header"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </header>
  );
}
