import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              About Salesmap.ai
            </h2>
            <p className="text-black text-lg mb-6">
              We're revolutionizing the way sales teams prospect on Google Maps.
              Our mission is to make territory mapping and lead generation
              effortless for sales professionals worldwide.
            </p>
            <p className="text-black text-lg mb-8">
              Founded by sales professionals who understood the challenges of
              traditional prospecting, Salesmap.ai combines the power of Google
              Maps with HubSpot's robust CRM capabilities to create a seamless
              prospecting experience.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Learn More About Us
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder-about.png"
                alt="About Salesmap.ai"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};