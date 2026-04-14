import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ShowcaseSection from "./components/ShowcaseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { features, steps, pizzas, testimonials, footerLinks } from "./data/content";

function App() {
  return (
    <div className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-blush/15 via-lava/10 to-transparent blur-3xl" />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection features={features} />
        <HowItWorksSection steps={steps} />
        <ShowcaseSection pizzas={pizzas} />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer links={footerLinks} />
    </div>
  );
}

export default App;
