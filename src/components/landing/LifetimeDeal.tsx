import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import posthog from "posthog-js";

export const LifetimeDeal = () => {
  const { toast } = useToast();

  return (
    <section id="pricing" className="py-24 bg-primary text-black px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-white">
          Limited Time Offer
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Get lifetime access to Salesmap.ai for a one-time payment of $99.
          Never pay again!
        </p>
        <div className="max-w-lg mx-auto p-6 rounded-xl bg-white/10 backdrop-blur-lg">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-6xl font-bold text-white">$99</span>
            <div className="text-left">
              <div className="text-sm text-white">One-time payment</div>
              <div className="text-sm font-semibold text-white">Lifetime access</div>
            </div>
          </div>
          <ul className="space-y-3 text-left mb-8 max-w-sm mx-auto text-white">
            {[
              "All premium features included",
              "Unlimited Google Maps prospecting",
              "HubSpot integration",
              "AI-powered messaging",
              "Priority support",
              "Future updates included",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-orange-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
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
  );
};