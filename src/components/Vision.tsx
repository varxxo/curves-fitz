const Vision = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary/95 to-highlight/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Modern Glassmorphism Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-glass backdrop-blur-2xl border border-accent/30 shadow-glass p-12 md:p-16 animate-fade-in-scale">
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              <div className="inline-block">
                <span className="text-sm font-display font-semibold tracking-wider text-accent uppercase">Our Vision</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold text-background leading-tight">
                Shaping India's
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">Fashion Future</span>
              </h2>
              
              <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
              
              <p className="text-xl md:text-2xl text-background/95 leading-relaxed max-w-3xl mx-auto font-light">
                To become India's first <span className="text-accent font-semibold">AI-driven fashion & lifestyle super-app</span> — 
                blending technology with tradition to revolutionize tailoring, garment care, and sustainable fashion.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
                {[
                  { label: "AI-Powered", value: "100%" },
                  { label: "Express", value: "24-48h" },
                  { label: "Artisans", value: "1000+" },
                  { label: "Sustainable", value: "♻️" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 hover:bg-background/15 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-background/90 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
