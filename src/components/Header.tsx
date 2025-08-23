import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl shadow-card">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">HealthConnect</h1>
              <Badge variant="secondary" className="text-xs">
                Unified Ecosystem
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#patients" className="text-muted-foreground hover:text-primary transition-smooth">
              For Patients
            </a>
            <a href="#doctors" className="text-muted-foreground hover:text-primary transition-smooth">
              For Doctors
            </a>
            <a href="#security" className="text-muted-foreground hover:text-primary transition-smooth">
              Security
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="focus-ring">
              Sign In
            </Button>
            <Button className="gradient-primary focus-ring">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">
                Features
              </a>
              <a href="#patients" className="text-muted-foreground hover:text-primary transition-smooth">
                For Patients
              </a>
              <a href="#doctors" className="text-muted-foreground hover:text-primary transition-smooth">
                For Doctors
              </a>
              <a href="#security" className="text-muted-foreground hover:text-primary transition-smooth">
                Security
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="focus-ring">
                  Sign In
                </Button>
                <Button className="gradient-primary focus-ring">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;