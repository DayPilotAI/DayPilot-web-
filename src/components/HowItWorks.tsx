import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Brain, Calendar, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Connect Your Email",
    description: "Sign in with Google/Outlook and grant DayPilot access to your email for intelligent parsing.",
    color: "tech-blue"
  },
  {
    number: "02", 
    icon: Brain,
    title: "AI Learns Your Patterns",
    description: "Our AI analyzes your emails, bookings, and habits to understand your lifestyle.",
    color: "tech-purple"
  },
  {
    number: "03",
    icon: Calendar,
    title: "Automatic Organization",
    description: "DayPilot automatically creates your timeline, sets reminders, and tracks everything.",
    color: "tech-cyan"
  },
  {
    number: "04",
    icon: Zap,
    title: "Smart Insights",
    description: "Receive intelligent suggestions, spending insights, and life optimization tips.",
    color: "tech-purple"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge variant="outline" className="w-fit mx-auto">
            <Zap className="w-4 h-4 mr-2" />
            How It Works
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get started in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            DayPilot does all the heavy lifting. Just connect your accounts and watch the magic happen.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.color} to-tech-purple p-5 shadow-elegant group-hover:shadow-glow transition-all duration-500`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold gradient-text">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <Card className="w-full border-0 bg-card/50 backdrop-blur-sm shadow-card hover:shadow-elegant transition-all duration-500 group-hover:scale-105">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-tech-purple mt-6 lg:hidden animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2 mins</div>
            <div className="text-muted-foreground">Setup time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">AI monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">Zero</div>
            <div className="text-muted-foreground">Manual work</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;