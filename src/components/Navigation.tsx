import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-primary">Salesmap.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              Pricing
            </button>
            <button 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </button>
            <button 
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              FAQ
            </button>
            
            <Button variant="ghost" className="text-gray-700">
              Sign in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;