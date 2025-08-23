import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How secure is my medical data on HealthConnect?",
    answer: "Your medical data is protected by military-grade AES-256 encryption, blockchain technology for immutable records, and HIPAA/GDPR compliance. We use multi-factor authentication, regular security audits, and maintain SOC 2 Type II certification. Your data is never shared without your explicit consent."
  },
  {
    question: "Can I control who sees my medical information?",
    answer: "Absolutely. You have granular control over your data. You can grant or revoke access to specific doctors, specialists, or healthcare providers at any time. You can also choose to share only certain types of records (lab results, prescriptions, etc.) while keeping others private."
  },
  {
    question: "How does the AI assistant work and is it safe?",
    answer: "Our AI assistant analyzes your lab results and health data to provide insights and recommendations. It's trained on anonymized medical data and follows strict protocols. However, AI insights are for informational purposes only and should never replace professional medical advice. Always consult with your healthcare provider for medical decisions."
  },
  {
    question: "What happens if I need to access my records in an emergency?",
    answer: "In emergencies, authorized healthcare providers can access your critical medical information including allergies, current medications, chronic conditions, and emergency contacts. This can be done through our emergency access protocol while maintaining all security and privacy safeguards."
  },
  {
    question: "Is HealthConnect compatible with my current doctor's systems?",
    answer: "HealthConnect integrates with major Electronic Health Record (EHR) systems and hospital networks. If your healthcare provider doesn't have direct integration yet, you can easily share your records via secure links or export them in standard formats like PDF or HL7 FHIR."
  },
  {
    question: "How much does HealthConnect cost for patients?",
    answer: "HealthConnect is completely free for patients! You get unlimited health record storage, AI insights, appointment booking, medication reminders, and insurance matching at no cost. We believe healthcare access shouldn't depend on your ability to pay for record management."
  },
  {
    question: "Can I upload old medical records and test results?",
    answer: "Yes! You can upload any medical documents including old lab reports, imaging results, discharge summaries, and prescription histories. Our AI will help organize and digitize these records, making them searchable and accessible to you and your authorized healthcare providers."
  },
  {
    question: "What if I want to stop using HealthConnect?",
    answer: "You can export all your data at any time in standard formats and delete your account. We provide tools to easily transfer your records to another platform or back to paper format. There are no lock-in periods or penalties for leaving the platform."
  },
  {
    question: "How does the insurance and NGO matching work?",
    answer: "Our system analyzes your profile, medical needs, and financial situation to match you with relevant insurance plans, government programs, and NGO assistance programs. We help you understand eligibility requirements and can assist with application processes, but we don't handle the actual enrollment."
  },
  {
    question: "Is HealthConnect available internationally?",
    answer: "HealthConnect is currently available in the United States with plans to expand globally. We're working on compliance with international healthcare regulations including European GDPR, Canadian PIPEDA, and other regional privacy laws to serve patients worldwide."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Got Questions?
            <span className="gradient-accent bg-clip-text text-transparent"> We Have Answers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about HealthConnect's features, security, 
            pricing, and how we're revolutionizing healthcare data management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-background shadow-sm hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact support */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our healthcare experts are here to help. Get personalized answers 
              about how HealthConnect can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-primary focus-ring">
                Contact Support
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

export default FAQSection;