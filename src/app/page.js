import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import OurPackages from "./components/OurPackages";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <OurPackages />
      <Testimonials />
      <Faqs />
    </main>
  );
}
