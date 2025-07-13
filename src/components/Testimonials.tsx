import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Teacher",
      content: "MoodTrack has been a game-changer for my mental health. The daily tracking helps me understand my patterns, and the community support is incredible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9d3?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David L.",
      role: "Software Engineer",
      content: "As someone who struggles with anxiety, having a private space to track my moods and access mindfulness tools has been life-changing.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma R.",
      role: "Student",
      content: "The analytics feature helped me identify triggers I never noticed before. It's like having a therapist in my pocket, available 24/7.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories of
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real people sharing their mental health journeys with MoodTrack.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
           <div
  key={testimonial.name}
  className="glass p-8 rounded-2xl border border-white/10 card-hover fade-in animate-float"
  style={{ animationDelay: `${index * 0.1}s` }}
>

              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;