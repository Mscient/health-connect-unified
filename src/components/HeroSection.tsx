import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Brain, Users, Activity } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Healthcare professionals and patients in modern medical setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 text-sm px-4 py-2 bg-primary-light text-primary border-primary/20">
            <Activity className="w-4 h-4 mr-2" />
            Revolutionary Healthcare Platform
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            One Platform.
            <br />
            <span className="gradient-accent bg-clip-text text-transparent">
              Unified Healthcare.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect patients and doctors seamlessly with AI-powered insights, blockchain security, 
            and comprehensive medical record management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-hero">
              Start as Patient
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Join as Doctor
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-card/20 backdrop-blur-md border-primary-foreground/20 p-6 text-center shadow-card">
              <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Blockchain Security</h3>
              <p className="text-sm text-primary-foreground/80">Tamper-proof medical records with cryptographic verification</p>
            </Card>

            <Card className="bg-card/20 backdrop-blur-md border-primary-foreground/20 p-6 text-center shadow-card">
              <Brain className="w-8 h-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">AI Insights</h3>
              <p className="text-sm text-primary-foreground/80">Intelligent analysis and predictive healthcare recommendations</p>
            </Card>

            <Card className="bg-card/20 backdrop-blur-md border-primary-foreground/20 p-6 text-center shadow-card">
              <Users className="w-8 h-8 text-warning mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Unified Platform</h3>
              <p className="text-sm text-primary-foreground/80">One app for patients, doctors, labs, and healthcare providers</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-accent rounded-full opacity-20 float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 gradient-primary rounded-full opacity-10 float" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-success/20 rounded-full float" style={{ animationDelay: '-2s' }}></div>
    </section>
  );
};

export default HeroSection;