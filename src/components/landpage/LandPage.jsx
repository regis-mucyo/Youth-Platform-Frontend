import Header from "./Header";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import Trust from "./Trust";
import Testimonials from "./Testimonials";
import WhyJoinUs from "./WhyJoinUs";
import ImpactSection from "./ImpactSection";
import Footer from "./Footer";

export default function LandPage({ role = "mentee" }) {
  return (
    <>
      <Header currentRole={role} />
      <HeroSection role={role} />
      <ImpactSection />
      <HowItWorks />
      <Trust />
      <Testimonials />
      <WhyJoinUs />
      <Footer />
    </>
  );
}
