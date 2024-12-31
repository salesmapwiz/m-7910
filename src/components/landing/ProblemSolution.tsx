import { Button } from "@/components/ui/button";
import {
  Database,
  Filter,
  Mail,
  StickyNote,
  MapPin,
  Route,
} from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    { text: "Switching between tools and tabs wastes time", emoji: "❌" },
    { text: "Manually adding leads to CRMs is slow and error-prone", emoji: "😓" },
    { text: "Finding contact info like emails takes extra steps", emoji: "🧐" },
    {
      text: "No way to visually manage leads directly on Google Maps",
      emoji: "📍",
    },
    {
      text: "No filtering options to find the right businesses",
      emoji: "🔍",
    },
  ];

  const solutions = [
    {
      title: "Add Leads Directly to CRM",
      description:
        "Instantly add businesses from Google Maps to HubSpot CRM with one click—no manual data entry needed.",
      icon: Database,
    },
    {
      title: "Filter Search Results",
      description:
        "See only businesses that match your criteria, whether they're already in your CRM, have websites, or meet specific review ratings and filters.",
      icon: Filter,
    },
    {
      title: "Display Emails and Contact Info",
      description:
        "Automatically pull and show emails and contact details directly on Google My Business pages without extra steps.",
      icon: Mail,
    },
    {
      title: "Add Notes and Tasks",
      description:
        "Keep track of follow-ups and reminders by adding notes and tasks from the Chrome extension that sync instantly with your CRM.",
      icon: StickyNote,
    },
    {
      title: "Custom Pins and Visuals",
      description:
        "Use color-coded pins to track lead statuses and manage territories visually.",
      icon: MapPin,
    },
    {
      title: "Route Planning Tools",
      description:
        "Create and optimize routes to make customer visits more efficient.",
      icon: Route,
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Problem Section */}
      <div className="container mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center text-black mb-16">
          The Problem – Wasting Time and Missing Opportunities
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/lovable-uploads/84a706bf-4d95-4fba-a6c7-f8768b94e844.png"
                alt="Google Maps interface showing multiple tabs and tools"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              {problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-lg text-black"
                >
                  <span className="text-2xl">{problem.emoji}</span>
                  <span>{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">
            The Solution – Smarter Prospecting Right Inside Google Maps
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Transform Google Maps into your personal sales engine—no more switching
            tabs, no more manual entry. Everything happens right where you already
            work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-black">{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};