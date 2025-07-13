import { Heart, Shield, TrendingUp, Users, Moon, Smile } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Daily Mood Tracking",
      description: "Log your emotions with our intuitive mood tracker. Identify patterns and triggers to better understand your mental health journey.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Visualize your emotional patterns with beautiful charts and insights. Track your progress over time and celebrate your growth.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your mental health data is encrypted and secure. We never share your personal information with third parties.",
      color: "text-primary-glow"
    },
    {
      icon: Moon,
      title: "Sleep & Wellness",
      description: "Monitor sleep patterns, exercise habits, and wellness activities. Build a holistic view of your mental health.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others on similar journeys. Share experiences and find support in a safe, moderated environment.",
      color: "text-accent"
    },
    {
      icon: Smile,
      title: "Mindfulness Tools",
      description: "Access guided meditations, breathing exercises, and mindfulness practices tailored to your needs.",
      color: "text-primary-glow"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mental Wellness
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to support your mental health journey with compassion and understanding.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
           <div
  key={feature.title}
  className="glass p-8 rounded-2xl border border-white/10 card-hover fade-in animate-float"
  style={{ animationDelay: `${index * 0.1}s` }}
>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-4">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;