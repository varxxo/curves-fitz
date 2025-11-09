import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Vision />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
