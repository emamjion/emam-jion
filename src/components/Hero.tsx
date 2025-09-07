"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">
      {/* Header */}
      <header>Header</header>

      {/* Content */}
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I&apos;m A</span>{" "}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                "MERN Developer",
                2000,
                "Frontend Dev",
                2000,
                "Problem Solver",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering custom websites that captivate with design and impress
            with performance.
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Contact me</button>
          </ScrollLink>

          {/* Stats */}
          <div>Stata</div>
        </div>

        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40">
            <Image
              src={"/assets/hero.webp"}
              alt="hero image"
              priority
              fill
              quality="100"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
