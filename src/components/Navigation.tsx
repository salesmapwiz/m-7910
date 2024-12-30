import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl mx-auto">
      <div className="bg-white/80 backdrop-blur-lg border border-border rounded-lg shadow-lg px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-primary">
          Salesmap.ai
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-gray-600">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;