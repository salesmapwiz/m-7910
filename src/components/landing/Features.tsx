import { Check } from "lucide-react";

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

export const Features = () => {
  return (
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
  );
};