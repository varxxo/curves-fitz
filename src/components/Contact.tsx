import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "90, Thiruvalluvar Salai, Teynampet, Chennai - 600018",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "9080277405 / 8124339392",
    },
    {
      icon: Mail,
      title: "Email",
      content: "curvesandfitz.in@gmail.com",
    },
  ];

  const socialLinks = [
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "X (Twitter)", url: "#", icon: "twitter" },
    { name: "Facebook", url: "#", icon: "facebook" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Stay <span className="text-accent">Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a designer, tailor, or customer — join us in shaping India's smart fashion future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                CURVES & FITZ TECHNOLOGY PRIVATE LIMITED
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="glass"
                      size="icon"
                      className="rounded-full"
                      asChild
                    >
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.icon === "instagram" && "📷"}
                        {social.icon === "linkedin" && "💼"}
                        {social.icon === "twitter" && "🐦"}
                        {social.icon === "facebook" && "👥"}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in-scale">
            <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2687891234567!2d80.25!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA4MMKwMTUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Curves & Fitz Location - Teynampet, Chennai"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
