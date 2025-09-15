import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Plane, Users } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Perfect for managing classes, assignments, and campus life",
    features: [
      "Class schedule optimization",
      "Assignment deadline tracking", 
      "Campus meal plan monitoring",
      "Study session planning",
      "Subscription management (Spotify, Netflix)",
      "Travel bookings for home visits"
    ],
    gradient: "from-tech-blue to-tech-cyan",
    persona: "Sarah, Computer Science Student",
    quote: "Never miss another deadline or forget about a subscription renewal"
  },
  {
    icon: Briefcase,
    title: "Working Professionals", 
    description: "Streamline your work-life balance with intelligent automation",
    features: [
      "Meeting schedule optimization",
      "Commute tracking & suggestions",
      "Expense tracking automation",
      "Work-life balance insights",
      "Professional travel management",
      "Productivity pattern analysis"
    ],
    gradient: "from-tech-purple to-tech-blue",
    persona: "Mike, Marketing Manager",
    quote: "Focus on strategy while DayPilot handles the logistics"
  },
  {
    icon: Plane,
    title: "Frequent Travelers",
    description: "Your AI travel companion for seamless journeys",
    features: [
      "Multi-platform booking detection",
      "Smart departure reminders",
      "Travel expense consolidation",
      "Itinerary automation",
      "Hotel & transport coordination",
      "Travel pattern insights"
    ],
    gradient: "from-tech-cyan to-tech-purple",
    persona: "Alex, Sales Executive",
    quote: "Travel stress-free with AI handling all the details"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge variant="outline" className="w-fit mx-auto">
            <Users className="w-4 h-4 mr-2" />
            Who It's For
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built for{" "}
            <span className="gradient-text">every lifestyle</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a student, professional, or frequent traveler, 
            DayPilot adapts to your unique needs and routine.
          </p>
        </div>
        
        {/* Use Cases */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 group h-full"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} p-4 mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <CardTitle className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  {useCase.title}
                </CardTitle>
                
                <CardDescription className="text-base text-muted-foreground">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                {/* Features list */}
                <div className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient} mt-2 flex-shrink-0`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Persona & Quote */}
                <div className="pt-6 border-t border-border">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-foreground">
                      "{useCase.quote}"
                    </div>
                    <div className="text-xs text-muted-foreground">
                      — {useCase.persona}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} 
                style={{ 
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                  maskComposite: 'xor', 
                  padding: '1px' 
                }} 
              />
            </Card>
          ))}
        </div>
        
        {/* Future vision callout */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-card shadow-elegant">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                The Future: <span className="gradient-text">AI Life Copilot</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Alarm set at 6:30 AM because you have a 9 AM train and Uber usually takes 35 minutes."
              </p>
              <p className="text-muted-foreground">
                This is just the beginning. DayPilot is evolving into your complete AI life companion, 
                making decisions and optimizations you never even thought of.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UseCases;