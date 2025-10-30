"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image  - min-h-[480px] */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#dcf7ee] min-h-[410px] flex- items-end justify-center">
                <Image
                  src="/assets/emamjion.png"
                  alt="About Img"
                  width={350}
                  //   height={478}
                  height={400}
                  quality={100}
                  priority
                  className="pt-24" // temporary
                />
              </div>
              {/* Rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    alt="About shape"
                    src="/assets/shape-1.svg"
                    width={160}
                    height={160}
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">1+</div>
                  <div className="text-center leading-none">
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
