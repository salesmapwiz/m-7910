import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { About } from "@/components/landing/About";
import { FAQ } from "@/components/landing/FAQ";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <ProblemSolution />
        <Features />
        <About />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Index;