const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              Curves & <span className="text-accent">Fitz</span>
            </h3>
            <p className="text-primary-foreground/80 italic">
              Powered by AI. Crafted by Artisans.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-primary-foreground/80 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-primary-foreground/20" />

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/60">
            <p>© {currentYear} Curves & Fitz Technology Private Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
