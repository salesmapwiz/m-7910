import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import posthog from "posthog-js";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("waitlist_subscribers")
        .insert([{ email }]);

      if (error) throw error;

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
      posthog.capture('waitlist_signup_error', {
        email: email,
        error: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
  );
};