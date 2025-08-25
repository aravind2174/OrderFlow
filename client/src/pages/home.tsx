import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CustomerDashboard from "@/components/customer-dashboard";
import AdminDashboard from "@/components/admin-dashboard";
import ServicesSection from "@/components/services-section";
import FAQSection from "@/components/faq-section";
import SubscriptionSection from "@/components/subscription-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CustomerDashboard />
        <AdminDashboard />
        <ServicesSection />
        <FAQSection />
        <SubscriptionSection />
      </main>
    </div>
  );
}
