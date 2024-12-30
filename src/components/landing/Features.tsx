import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Add to CRM from Google Maps",
    description: "Add businesses directly to HubSpot from Google Business profiles with just one click. Streamline your prospecting workflow and save hours of manual data entry.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Show Emails & Socials",
    description: "Access contact information directly on Google Business listings. Get instant access to business emails and social media profiles without leaving Google Maps.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Smart Filtering",
    description: "Filter businesses based on CRM status and lead information. Never waste time prospecting the same business twice with our intelligent filtering system.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-black">
          Everything you need to supercharge your sales
        </h2>
        
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-black text-lg">
                  {feature.description}
                </p>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};