import { useEffect } from "react";
import posthog from "posthog-js";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { LifetimeDeal } from "@/components/landing/LifetimeDeal";
import Navigation from "@/components/Navigation";

const Index = () => {
  useEffect(() => {
    posthog.init('phc_Ebm802BTfBBg9TM7g34qgiInIYG2tK1J28gX2BFaDTE', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only'
    });
    
    posthog.capture('page_view', {
      page: 'landing_page'
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed header */}
        <Hero />
        <Features />
        <LifetimeDeal />
      </div>
    </div>
  );
};

export default Index;