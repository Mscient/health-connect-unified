import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Key, 
  CheckCircle,
  ArrowRight,
  FileCheck
} from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Blockchain Integrity",
    description: "Every medical record is cryptographically hashed and stored on an immutable blockchain",
    stats: "100% Tamper-Proof"
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using AES-256 military-grade encryption",
    stats: "256-bit Security"
  },
  {
    icon: Eye,
    title: "Granular Consent",
    description: "Patients control exactly who can access what parts of their medical data",
    stats: "Patient-Controlled"
  },
  {
    icon: Database,
    title: "HIPAA/GDPR Compliant",
    description: "Fully compliant with international healthcare privacy and data protection laws",
    stats: "Certified Compliance"
  },
  {
    icon: Key,
    title: "Multi-Factor Authentication",
    description: "Advanced authentication with biometric and hardware security key support",
    stats: "99.9% Secure Access"
  },
  {
    icon: FileCheck,
    title: "Audit Trail",
    description: "Complete immutable log of every access and modification to medical records",
    stats: "Full Transparency"
  }
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 bg-success-light text-success">
            <Shield className="w-4 h-4 mr-2" />
            Security & Privacy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bank-Grade Security
            <span className="gradient-accent bg-clip-text text-transparent"> for Healthcare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your medical data deserves the highest level of protection. Our platform employs 
            cutting-edge security technologies to ensure your health information remains private, 
            secure, and under your complete control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-feature transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {feature.stats}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
              <p className="text-sm text-muted-foreground">AES Encryption</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">SOC 2</div>
              <p className="text-sm text-muted-foreground">Type II Certified</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Security Monitoring</p>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Trusted by healthcare organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2 text-success" />
              HIPAA Compliant
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2 text-success" />
              GDPR Ready
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2 text-success" />
              SOC 2 Type II
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2 text-success" />
              ISO 27001
            </Badge>
          </div>
          
          <Button className="gradient-primary focus-ring">
            Learn More About Security
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;