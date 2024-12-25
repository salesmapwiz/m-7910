import { useEffect } from "react";
import posthog from "posthog-js";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { LifetimeDeal } from "@/components/landing/LifetimeDeal";

const Index = () => {
  useEffect(() => {
    // Initialize PostHog with your project API key
    posthog.init('phc_Ebm802BTfBBg9TM7g34qgiInIYG2tK1J28gX2BFaDTE', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only'
    });
    
    // Track page view
    posthog.capture('page_view', {
      page: 'landing_page'
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <LifetimeDeal />
    </div>
  );
};

export default Index;