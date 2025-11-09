import { Ruler, Sparkles, ShoppingBag, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "AI Tailoring",
      description: "Perfect fit with 3D body measurement and precision cutting.",
      gradient: "from-highlight/20 to-highlight/5",
      borderColor: "border-highlight/30",
    },
    {
      icon: Sparkles,
      title: "Smart Laundry",
      description: "Doorstep pickup with real-time tracking and quality assurance.",
      gradient: "from-accent/20 to-accent/5",
      borderColor: "border-accent/30",
    },
    {
      icon: ShoppingBag,
      title: "Fashion Marketplace",
      description: "Curated collection to buy, sell, or rent premium fashion.",
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/30",
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Lightning-fast service with your perfect fit in 24–48 hours.",
      gradient: "from-accent/30 to-accent/10",
      borderColor: "border-accent/40",
    },
  ];

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-display font-semibold tracking-wider text-highlight uppercase">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming fashion through technology and craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 shadow-subtle hover:shadow-glow transition-all duration-500 hover:-translate-y-3 animate-slide-up border-2 border-transparent hover:border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-subtle">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
