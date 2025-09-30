import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work";

const Homepage = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Services section */}
      <Services />
      {/* About section */}
      <About />
      {/* Journey section */}
      <Journey />
      {/* Work section */}
      <Work />
      {/* Contact section */}
      <Contact />

      {/* Temporary Div */}
      <div className="h-[3000px]"></div>
    </>
  );
};

export default Homepage;
