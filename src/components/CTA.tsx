import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <Card className="relative overflow-hidden border-0 bg-gradient-hero shadow-glow max-w-4xl mx-auto">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 right-20 w-16 h-16 border border-white/20 rounded-full" />
          </div>
          
          <CardContent className="relative z-10 p-8 lg:p-16 text-center text-white space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto bg-white/20 text-white border-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Early Access Available
            </Badge>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Ready to live{" "}
                <span className="text-white/90">smarter?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Join thousands who've already upgraded their daily life with AI. 
                Start your intelligent life management journey today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-semibold px-8 shadow-lg hover:shadow-xl"
              >
                <Brain className="w-5 h-5 mr-2" />
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                <Zap className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="pt-8 space-y-4">
              <div className="flex justify-center items-center gap-8 text-white/70">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm">Beta Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5hrs</div>
                  <div className="text-sm">Saved/Week</div>
                </div>
              </div>
              
              <p className="text-sm text-white/60">
                ✨ No credit card required • 🔒 Your data stays private • 🚀 Setup in 2 minutes
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Bottom testimonial */}
        <div className="mt-16 text-center">
          <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            "DayPilot has completely transformed how I manage my life. I never realized how much mental energy I was wasting on tracking simple things."
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">
            — Early Beta User
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;