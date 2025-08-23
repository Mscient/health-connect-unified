import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Brain, 
  FileText, 
  Calendar, 
  Stethoscope, 
  Users, 
  HeartHandshake, 
  Smartphone,
  Database,
  Zap,
  Lock,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Blockchain Security",
    description: "Immutable medical records with cryptographic hashing and distributed ledger technology",
    category: "Security",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "AI Medical Assistant",
    description: "Intelligent analysis of lab reports, treatment recommendations, and early disease detection",
    category: "AI Technology",
    color: "text-accent"
  },
  {
    icon: FileText,
    title: "Lifelong Health Records",
    description: "Comprehensive medical history storage accessible across all healthcare providers",
    category: "Records",
    color: "text-success"
  },
  {
    icon: Calendar,
    title: "Smart Appointments",
    description: "Seamless booking system with automated reminders and telehealth integration",
    category: "Scheduling",
    color: "text-warning"
  },
  {
    icon: Stethoscope,
    title: "Doctor Collaboration",
    description: "Peer-to-peer network for medical professionals to share knowledge and discuss cases",
    category: "Community",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Multi-Role Platform",
    description: "Unified interface serving patients, doctors, labs, and healthcare administrators",
    category: "Platform",
    color: "text-accent"
  },
  {
    icon: HeartHandshake,
    title: "Insurance Integration",
    description: "Automated matching with insurance providers and NGO support programs",
    category: "Support",
    color: "text-success"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Native mobile experience with offline capabilities and sync across devices",
    category: "Technology",
    color: "text-warning"
  },
  {
    icon: Database,
    title: "Lab Integration",
    description: "Direct lab report uploads with AI-powered analysis and automated notifications",
    category: "Labs",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Real-Time Monitoring",
    description: "IoT device integration for continuous health monitoring and alerts",
    category: "Monitoring",
    color: "text-accent"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "HIPAA/GDPR compliant with granular consent management and data control",
    category: "Privacy",
    color: "text-success"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Machine learning models for health trend analysis and risk prediction",
    category: "Analytics",
    color: "text-warning"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary Healthcare
            <span className="gradient-accent bg-clip-text text-transparent"> Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge features designed to transform how patients and healthcare providers 
            interact, share data, and deliver care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-feature transition-all duration-300 hover:-translate-y-1 gradient-card border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;