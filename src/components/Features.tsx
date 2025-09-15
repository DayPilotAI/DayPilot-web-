import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  CreditCard, 
  MapPin, 
  Clock, 
  Lightbulb, 
  Brain,
  Calendar,
  TrendingUp,
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Smart Email Parsing",
    description: "Automatically detects bookings, orders, receipts, and appointments from your email",
    details: [
      "Flight, train, bus, hotel bookings",
      "Food orders (Zomato, Swiggy)",
      "E-commerce purchases (Amazon, Flipkart)",
      "OTT subscriptions (Netflix, Spotify)"
    ],
    gradient: "from-tech-blue to-tech-cyan"
  },
  {
    icon: CreditCard,
    title: "Subscription Tracker",
    description: "Centralized dashboard of all active subscriptions with intelligent alerts",
    details: [
      "Auto-detection via email & app stores",
      "Renewal reminders",
      "Usage-based cancellation suggestions",
      "Spending insights"
    ],
    gradient: "from-tech-purple to-tech-blue"
  },
  {
    icon: MapPin,
    title: "Transport & Travel",
    description: "Seamless tracking of all your movement and travel bookings",
    details: [
      "Uber, Ola, Rapido tracking",
      "Train & flight detection",
      "Smart departure reminders",
      "Route optimization"
    ],
    gradient: "from-tech-cyan to-tech-purple"
  },
  {
    icon: Clock,
    title: "Daily Life Tracking",
    description: "AI-powered insights into your daily routines and habits",
    details: [
      "Wake-up & sleep patterns",
      "Work schedule optimization",
      "Commute tracking",
      "Health & fitness monitoring"
    ],
    gradient: "from-tech-blue to-tech-purple"
  },
  {
    icon: Lightbulb,
    title: "Smart Predictions",
    description: "Proactive suggestions and reminders based on your patterns",
    details: [
      "Subscription renewal alerts",
      "Travel preparation reminders",
      "Routine optimization suggestions",
      "Spending pattern insights"
    ],
    gradient: "from-tech-purple to-tech-cyan"
  },
  {
    icon: Brain,
    title: "AI Life Summary",
    description: "Daily AI-generated summaries of your entire day",
    details: [
      "Comprehensive day breakdown",
      "Sleep & activity analysis",
      "Spending summaries",
      "Health insights"
    ],
    gradient: "from-tech-cyan to-tech-blue"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge variant="outline" className="w-fit mx-auto">
            <Smartphone className="w-4 h-4 mr-2" />
            Core Features
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything you need for{" "}
            <span className="gradient-text">intelligent life management</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DayPilot automatically handles the tedious parts of life organization, 
            so you can focus on what truly matters.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 group cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardHeader className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <CardTitle className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 flex-shrink-0`} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              {/* Hover effect gradient border */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor', padding: '1px' }} />
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-tech-purple" />
            <span>Powered by advanced AI and machine learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;