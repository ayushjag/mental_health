import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Heart, Shield, Users } from 'lucide-react';

const HeroSection = () => {
  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Northern Lights Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero-uploads/25d622e7-3001-465f-bf4c-9f980a2679b1.png)',
        }}
      >
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20 fade-in">
            <Heart className="h-4 w-4  mr-2" />
            <span className="text-sm font-medium text-foreground">Your Mental Health Companion</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-white">Track Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                Mental Wellness
              </span>
              <br />
              <span className="text-white">Journey</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto slide-in-right">
            Take control of your mental health with MoodTrack. Monitor your emotions, 
            practice mindfulness, and build healthy habits with our gentle, AI-powered companion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 fade-in">
            <Button className="btn-calming group" size="lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="ghost" size="lg" className="group glass border border-white/10 hover:border-primary/30">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 pt-12 fade-in">
            <div className="flex items-center space-x-3">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-sm text-gray-300">Mood Tracking</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-sm text-gray-300">Private & Secure</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-primary-glow" />
              <span className="text-sm text-gray-300">Community Support</span>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-24 text-center fade-in">
          <p className="text-sm text-gray-400 mb-8">Trusted by mental health professionals</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 sm:space-x-12 opacity-40">
            <div className="text-lg font-semibold">Psychology Today</div>
            <div className="text-lg font-semibold">BetterHelp</div>
            <div className="text-lg font-semibold">Headspace</div>
            <div className="text-lg font-semibold">Calm</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;