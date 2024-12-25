import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import posthog from "posthog-js";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize PostHog
    posthog.init('YOUR_POSTHOG_PUBLIC_KEY', {
      api_host: 'https://app.posthog.com',
    });
    // Track page view
    posthog.capture('page_view', {
      page: 'landing_page'
    });
  }, []);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("waitlist_subscribers")
        .insert([{ email }]);

      if (error) throw error;

      // Track successful signup
      posthog.capture('waitlist_signup', {
        email: email
      });

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      // Track failed signup
      posthog.capture('waitlist_signup_error', {
        email: email,
        error: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: "Add to CRM from Google Maps",
      description: "Add businesses directly to HubSpot from Google Business profiles",
      icon: "🎯",
    },
    {
      title: "Show Emails & Socials",
      description: "Access contact information directly on Google Business listings",
      icon: "📧",
    },
    {
      title: "Smart Filtering",
      description: "Filter businesses based on CRM status and lead information",
      icon: "🔍",
    },
    {
      title: "Automated Sequences",
      description: "Add businesses to HubSpot sequences for automated outreach",
      icon: "⚡",
    },
    {
      title: "Visual Territory Management",
      description: "See all your HubSpot customers directly on Google Maps",
      icon: "🗺️",
    },
    {
      title: "AI-Powered Messaging",
      description: "Generate custom email templates with AI assistance",
      icon: "🤖",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
            Google Maps +{" "}
            <span className="text-[#FF7A59]">HubSpot</span> ={" "}
            <span className="bg-gradient-to-r from-[#9EE755] to-[#CFDD3C] bg-clip-text text-transparent">
              Salesmap.ai
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
            Turn Google Maps into your most powerful prospecting tool. Join the waitlist
            for early access and grab our exclusive lifetime deal.
          </p>
          
          {/* Waitlist Form */}
          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isSubmitting}>
                Join Waitlist
              </Button>
            </div>
          </form>

          <Button
            variant="outline"
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => {
              posthog.capture('lifetime_deal_click');
              toast({
                title: "Coming Soon",
                description: "Lifetime deals will be available soon!",
              });
            }}
          >
            Get Lifetime Deal - $99
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything you need to supercharge your sales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Deal CTA */}
      <section className="py-24 bg-primary text-white px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8">
            Limited Time Offer
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get lifetime access to Salesmap.ai for a one-time payment of $99.
            Never pay again!
          </p>
          <div className="max-w-lg mx-auto p-6 rounded-xl bg-white/10 backdrop-blur-lg">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-6xl font-bold">$99</span>
              <div className="text-left">
                <div className="text-sm text-white/80">One-time payment</div>
                <div className="text-sm font-semibold">Lifetime access</div>
              </div>
            </div>
            <ul className="space-y-3 text-left mb-8 max-w-sm mx-auto">
              {[
                "All premium features included",
                "Unlimited Google Maps prospecting",
                "HubSpot integration",
                "AI-powered messaging",
                "Priority support",
                "Future updates included",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="w-full bg-accent text-primary hover:bg-accent/90"
              onClick={() => {
                posthog.capture('lifetime_deal_bottom_click');
                toast({
                  title: "Coming Soon",
                  description: "Lifetime deals will be available soon!",
                });
              }}
            >
              Get Lifetime Access Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;