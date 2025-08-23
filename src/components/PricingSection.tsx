import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, CreditCard } from "lucide-react";

const plans = [
  {
    name: "Patient",
    price: "Free",
    period: "Forever",
    description: "Perfect for individuals managing their health records",
    popular: false,
    features: [
      "Unlimited health record storage",
      "Basic AI health insights",
      "Doctor appointment booking",
      "Medication reminders",
      "Insurance plan matching",
      "Mobile app access",
      "24/7 customer support"
    ],
    notIncluded: [
      "Advanced AI predictions",
      "Priority doctor matching",
      "Telemedicine consultations"
    ],
    cta: "Get Started Free",
    highlight: false
  },
  {
    name: "Doctor Pro",
    price: "$49",
    period: "per month",
    description: "Comprehensive tools for healthcare professionals",
    popular: true,
    features: [
      "Patient record access (with consent)",
      "Advanced AI diagnostic assistance",
      "Peer collaboration network",
      "Digital prescription management",
      "Practice analytics dashboard",
      "Telemedicine integration",
      "Priority support",
      "API access for integrations",
      "Multi-location management"
    ],
    notIncluded: [
      "Enterprise compliance features"
    ],
    cta: "Start 14-Day Trial",
    highlight: true
  },
  {
    name: "Healthcare System",
    price: "Custom",
    period: "Enterprise pricing",
    description: "Scalable solution for hospitals and healthcare networks",
    popular: false,
    features: [
      "Unlimited provider accounts",
      "Custom AI model training",
      "Advanced security & compliance",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment options",
      "Staff training programs",
      "Custom reporting",
      "White-label options"
    ],
    notIncluded: [],
    cta: "Contact Sales",
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2">
            <CreditCard className="w-4 h-4 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your
            <span className="gradient-accent bg-clip-text text-transparent"> Healthcare Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From individual patients to large healthcare systems, we have the right plan 
            to support your healthcare needs with transparent, affordable pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.highlight ? 'border-primary shadow-feature scale-105' : 'border-border/50'} transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Custom" && plan.price !== "Free" && (
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  )}
                  {plan.price === "Free" && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                  {plan.price === "Custom" && (
                    <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-6 pb-6">
                <Button 
                  className={`w-full mb-6 ${plan.highlight ? 'gradient-primary' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                  variant={plan.highlight ? "default" : "secondary"}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                      <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-muted-foreground">
            Try HealthConnect risk-free. If you're not completely satisfied, 
            we'll refund your payment within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;