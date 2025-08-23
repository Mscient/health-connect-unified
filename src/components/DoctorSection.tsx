import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Brain, 
  MessageSquare, 
  Shield, 
  FileText, 
  ArrowRight,
  Stethoscope,
  TrendingUp,
  Clock
} from "lucide-react";
import doctorImage from "@/assets/doctor-platform.jpg";

const doctorFeatures = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Access authorized patient records and track treatment progress seamlessly"
  },
  {
    icon: Brain,
    title: "AI Assistance",
    description: "Get intelligent insights and treatment recommendations based on patient data"
  },
  {
    icon: MessageSquare,
    title: "Peer Collaboration",
    description: "Connect with fellow doctors to discuss cases and share medical expertise"
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Role-based permissions ensure you only access data you're authorized to see"
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description: "Issue electronic prescriptions with automated patient reminders"
  },
  {
    icon: TrendingUp,
    title: "Practice Analytics",
    description: "Track patient outcomes and optimize your treatment protocols"
  }
];

const DoctorSection = () => {
  return (
    <section id="doctors" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <Card className="overflow-hidden shadow-hero">
              <img 
                src={doctorImage} 
                alt="Doctor using tablet to review patient records and medical data"
                className="w-full h-auto object-cover"
              />
            </Card>
            
            {/* Floating stats */}
            <Card className="absolute -top-4 -right-4 p-4 shadow-card bg-card/95 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Average Consult</p>
                  <p className="text-xs text-muted-foreground">15 mins saved</p>
                </div>
              </div>
            </Card>

            <Card className="absolute -bottom-4 -left-4 p-4 shadow-card bg-card/95 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-warning-light flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Patient Outcomes</p>
                  <p className="text-xs text-muted-foreground">Improved by 23%</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Badge className="mb-4 px-4 py-2 bg-primary-light text-primary">
              <Stethoscope className="w-4 h-4 mr-2" />
              For Doctors
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empower Your
              <span className="gradient-accent bg-clip-text text-transparent"> Practice</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your medical practice with our comprehensive doctor platform. 
              Access patient data securely, collaborate with peers, and leverage AI insights 
              to provide the best possible care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {doctorFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
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
                Join as Doctor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="focus-ring">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;