import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I set up my restaurant on the platform?",
    answer: "You can have your restaurant online in less than 24 hours. Our onboarding team will help you set up your menu, payment methods, and delivery zones. Most restaurants are taking orders within the first day of setup."
  },
  {
    question: "What payment methods do you support?",
    answer: "We support all major payment methods including credit/debit cards, digital wallets (Apple Pay, Google Pay), bank transfers, and cash on delivery. All transactions are secured with enterprise-level encryption."
  },
  {
    question: "Do you provide delivery services or just the platform?",
    answer: "We provide the complete platform including delivery management tools. You can use your own delivery team or integrate with third-party delivery services. Our system optimizes routes and provides real-time tracking for all orders."
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "No long-term contracts required. You can cancel anytime with 30 days notice. We believe in earning your business through great service, not binding contracts. Your data remains accessible during the transition period."
  },
  {
    question: "What kind of analytics and reporting do you provide?",
    answer: "Comprehensive analytics including sales trends, customer behavior, popular items, peak hours, delivery performance, and financial reporting. All data is presented in easy-to-understand dashboards with export options for detailed analysis."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our restaurant management platform.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button 
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                data-testid={`faq-question-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`text-brand-green transform transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div 
                  className="px-8 pb-6"
                  data-testid={`faq-answer-${index}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
