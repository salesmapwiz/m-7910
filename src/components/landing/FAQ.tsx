import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does Salesmap.ai work with HubSpot?",
      answer:
        "Salesmap.ai seamlessly integrates with HubSpot, allowing you to add businesses directly from Google Maps to your HubSpot CRM with just one click. It automatically syncs contact information and business details.",
    },
    {
      question: "Can I try Salesmap.ai before purchasing?",
      answer:
        "Yes! We offer a free trial period where you can explore all features and see how Salesmap.ai can transform your prospecting workflow.",
    },
    {
      question: "Is there a limit to how many businesses I can add?",
      answer:
        "Our plans are designed to scale with your needs. The number of businesses you can add depends on your subscription tier. Contact us for custom enterprise solutions.",
    },
    {
      question: "Do you offer team collaboration features?",
      answer:
        "Absolutely! Teams can share territories, track prospecting progress, and collaborate on lead generation efforts through our team workspace feature.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including live chat, email support, and detailed documentation. Enterprise customers also get access to dedicated account managers.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg px-6"
            >
              <AccordionTrigger className="text-black hover:text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};