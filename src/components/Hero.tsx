import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Brain, Calendar, Zap } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tech-blue/20 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-cyan/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Life Organizer
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Meet{" "}
                <span className="gradient-text">DayPilot</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                The intelligent companion that automatically tracks, organizes, and optimizes your daily life—so you don't have to.
              </p>
              
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">70% AI-driven</span> personalization, prediction, and automation. Never manually track your activities again.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary border-0 hover:shadow-glow transition-all duration-300 text-white font-semibold px-8">
                <Brain className="w-5 h-5 mr-2" />
                Experience the AI
              </Button>
              <Button variant="outline" size="lg" className="font-semibold">
                <Calendar className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">70%</div>
                <div className="text-sm text-muted-foreground">AI Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">Zero</div>
                <div className="text-sm text-muted-foreground">Manual Input</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">Smart</div>
                <div className="text-sm text-muted-foreground">Predictions</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 pulse-glow rounded-2xl overflow-hidden">
              <img 
                src={heroMockup} 
                alt="DayPilot AI interface showing smart scheduling and automation features"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border rounded-xl p-4 shadow-elegant float-animation">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-tech-purple" />
                <span className="text-sm font-medium">AI Detected: Flight at 4 PM</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border rounded-xl p-4 shadow-elegant float-animation" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-tech-blue" />
                <span className="text-sm font-medium">Smart reminder sent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;