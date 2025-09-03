import Header from "./Header";
import HeroSection from "./Hero";
import HowItWorks from "./HowItWorks";
import Trust from "./Trust";
import Testimonials from "./Testimonials";
import WhyJoinUs from "./WhyJoinUs";
export default function LandPage({ onGetStarted }) {
  return (
    <>
      <Header />
      <HeroSection onGetStarted={onGetStarted} />
      <HowItWorks />
      <Trust />
      <Testimonials />
      <WhyJoinUs />
    </>
  );
}
