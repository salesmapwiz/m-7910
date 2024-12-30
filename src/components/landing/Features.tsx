import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Add to CRM from Google Maps",
    description: "Add businesses directly to HubSpot from Google Business profiles with just one click. Streamline your prospecting workflow and save hours of manual data entry.",
    image: "/placeholder-feature.png", // Replace with actual image later
  },
  {
    title: "Show Emails & Socials",
    description: "Access contact information directly on Google Business listings. Get instant access to business emails and social media profiles without leaving Google Maps.",
    image: "/placeholder-feature.png",
  },
  {
    title: "Smart Filtering",
    description: "Filter businesses based on CRM status and lead information. Never waste time prospecting the same business twice with our intelligent filtering system.",
    image: "/placeholder-feature.png",
  },
];

export const Features = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section id="features" className="py-24 bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Everything you need to supercharge your sales
        </h2>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-600 text-lg">
                {features[currentFeature].description}
              </p>
              <div className="flex items-center gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevFeature}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-gray-500">
                  {currentFeature + 1} of {features.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextFeature}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={features[currentFeature].image}
                  alt={features[currentFeature].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};