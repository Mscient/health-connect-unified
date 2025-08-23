import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star, Users } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Cardiologist",
    hospital: "Stanford Medical Center",
    avatar: "SC",
    rating: 5,
    quote: "HealthConnect has transformed how I access patient histories. The AI insights have helped me catch early warning signs I might have missed."
  },
  {
    name: "Maria Rodriguez",
    role: "Patient",
    condition: "Diabetes Management",
    avatar: "MR",
    rating: 5,
    quote: "Finally, all my medical records in one place! The medication reminders and doctor coordination have been life-changing."
  },
  {
    name: "Dr. James Wilson",
    role: "Emergency Physician",
    hospital: "City General Hospital",
    avatar: "JW",
    rating: 5,
    quote: "In emergency situations, having instant access to complete patient histories saves lives. This platform is revolutionary."
  },
  {
    name: "Jennifer Thompson",
    role: "Patient",
    condition: "Cancer Survivor",
    avatar: "JT",
    rating: 5,
    quote: "The secure sharing of my oncology records between specialists has made my treatment coordination seamless and stress-free."
  },
  {
    name: "Dr. Michael Park",
    role: "Family Medicine",
    hospital: "Community Health Network",
    avatar: "MP",
    rating: 5,
    quote: "The peer collaboration feature has connected me with specialists worldwide. It's like having a medical conference in my pocket."
  },
  {
    name: "Robert Kim",
    role: "Patient",
    condition: "Chronic Care",
    avatar: "RK",
    rating: 5,
    quote: "The insurance matching helped me find coverage I didn't know existed. The financial relief has been incredible."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands
            <span className="gradient-accent bg-clip-text text-transparent"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Healthcare professionals and patients around the world trust HealthConnect 
            to manage their most important medical information safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-feature transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary-light text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.hospital || testimonial.condition}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-background rounded-2xl p-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Patients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2.5K+</div>
              <p className="text-muted-foreground">Healthcare Providers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">500+</div>
              <p className="text-muted-foreground">Partner Hospitals</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-warning mb-2">99.9%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;