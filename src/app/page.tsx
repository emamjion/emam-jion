"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect } from "react";

const Homepage = () => {
  // Implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Fixed menu */}
      <FixedMenu />
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
