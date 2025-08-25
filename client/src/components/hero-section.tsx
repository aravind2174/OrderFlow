import { Button } from "@/components/ui/button";
import InfiniteSlider from "./infinite-slider";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Complete <span className="gradient-text">Restaurant</span><br />
            Online Ordering Solution
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your restaurant operations with our comprehensive SaaS platform. 
            From customer ordering to delivery management, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
              data-testid="button-start-trial-hero"
            >
              Start Your Free Trial
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-brand-green text-brand-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-green hover:text-white transition-all duration-300"
              data-testid="button-watch-demo"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        <InfiniteSlider />
      </div>
    </section>
  );
}
