import tailorImage from "@/assets/tailor-craftsmanship.jpg";
import laundryImage from "@/assets/laundry-delivery.jpg";
import scanImage from "@/assets/3d-body-scan.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative h-[600px] animate-fade-in">
            <div className="absolute top-0 left-0 w-3/5 h-2/5 overflow-hidden rounded-2xl shadow-card z-10 border border-border">
              <img
                src={tailorImage}
                alt="Tailor working on premium fabric"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-1/4 right-0 w-3/5 h-2/5 overflow-hidden rounded-2xl shadow-card z-20 border border-border">
              <img
                src={laundryImage}
                alt="Luxury laundry delivery service"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-1/4 w-2/5 h-2/5 overflow-hidden rounded-2xl shadow-glass z-30 border-2 border-highlight/30 bg-gradient-glass backdrop-blur-sm">
              <img
                src={scanImage}
                alt="3D body scan visualization"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-sm font-display font-semibold tracking-wider text-highlight uppercase">About Us</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight">
              Curves & <span className="text-accent">Fitz</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Curves & Fitz</strong> is reimagining the fashion experience through{" "}
              <span className="text-highlight font-semibold">AI measurement</span>,{" "}
              <span className="text-accent font-semibold">express tailoring</span>, and{" "}
              <span className="text-highlight font-semibold">smart laundry integration</span>.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to make custom fashion effortless, fast, and sustainable — 
              empowering local artisans through technology.
            </p>

            <blockquote className="relative border-l-4 border-accent pl-8 py-6 bg-gradient-glass backdrop-blur-sm rounded-r-2xl shadow-subtle">
              <p className="text-2xl md:text-3xl font-display font-semibold italic text-foreground">
                "Your Fit. Your Fabric. Your Doorstep."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
