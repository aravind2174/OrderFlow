import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Unlimited orders and customers",
  "Mobile & web ordering platform", 
  "Real-time analytics dashboard",
  "Delivery management system",
  "24/7 priority support",
  "Custom branding options"
];

export default function SubscriptionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-brand-green to-brand-green-light p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl p-8 text-center" data-testid="pricing-card">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Plan</h3>
                <p className="text-gray-600">Perfect for growing restaurants</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900" data-testid="price-amount">$49</span>
                <span className="text-xl text-gray-600">/month</span>
                <p className="text-sm text-gray-500 mt-2">+ 2.5% transaction fee</p>
              </div>
              
              <div className="space-y-4 mb-8 text-left">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3"
                    data-testid={`feature-${index}`}
                  >
                    <Check className="text-brand-green flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  className="cta-button text-white w-full py-4 rounded-lg font-semibold text-lg mb-4"
                  data-testid="button-start-trial-pricing"
                >
                  Start 30-Day Free Trial
                </Button>
                <p className="text-sm text-gray-500">No credit card required • Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
