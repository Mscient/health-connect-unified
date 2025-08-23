import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 gradient-primary rounded-xl shadow-card">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">HealthConnect</h3>
                <Badge variant="secondary" className="text-xs">
                  Unified Ecosystem
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Revolutionizing healthcare through unified patient-doctor connectivity, 
              AI-powered insights, and blockchain security.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">For Patients</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Doctors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Hospitals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">For Labs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@healthconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Healthcare Blvd<br />San Francisco, CA 94102</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 HealthConnect. All rights reserved. Built with care for healthcare.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🔒 HIPAA Compliant</span>
              <span>🛡️ SOC 2 Certified</span>
              <span>🌐 GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;