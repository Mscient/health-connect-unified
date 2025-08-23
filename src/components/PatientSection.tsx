import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calendar, 
  Bell, 
  Search, 
  CreditCard, 
  ArrowRight,
  Heart,
  Activity,
  Pill
} from "lucide-react";
import patientImage from "@/assets/patient-dashboard.jpg";

const patientFeatures = [
  {
    icon: FileText,
    title: "Digital Health Records",
    description: "Store and access your complete medical history securely in one place"
  },
  {
    icon: Calendar,
    title: "Easy Appointments",
    description: "Book consultations with verified doctors and receive automated reminders"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss medications or follow-up appointments with intelligent notifications"
  },
  {
    icon: Search,
    title: "Find Specialists",
    description: "Discover the right healthcare professionals based on your specific needs"
  },
  {
    icon: CreditCard,
    title: "Insurance Support",
    description: "Get matched with insurance plans and NGO programs for financial assistance"
  },
  {
    icon: Activity,
    title: "Health Insights",
    description: "Receive AI-powered analysis of your lab results and health trends"
  }
];

const PatientSection = () => {
  return (
    <section id="patients" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4 px-4 py-2 bg-success-light text-success">
              <Heart className="w-4 h-4 mr-2" />
              For Patients
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Health,
              <span className="gradient-accent bg-clip-text text-transparent"> Your Control</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take charge of your healthcare journey with our comprehensive patient platform. 
              From storing medical records to finding the right doctors, we've got you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {patientFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-success-light flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-primary focus-ring">
                Start as Patient
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="focus-ring">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-hero">
              <img 
                src={patientImage} 
                alt="Patient dashboard interface showing health metrics and medical data"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating stats */}
            <Card className="absolute -top-4 -left-4 p-4 shadow-card bg-card/95 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-success-light flex items-center justify-center">
                  <Pill className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Medication Reminders</p>
                  <p className="text-xs text-muted-foreground">100% Adherence Rate</p>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -right-4 p-4 shadow-card bg-card/95 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Health Score</p>
                  <p className="text-xs text-muted-foreground">Trending Up +12%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSection;