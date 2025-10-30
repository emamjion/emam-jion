"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
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
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText
                text="My Name is Emam Khalid Jion"
                textStyles="mb-2 text-primary text-[36px] tracking-[-0.02em] leading-[44px] font-semibold"
              />
              <p className="text-lg">Web & App Developer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              I create visually stunning and functionai websites and app using
              modern technologies and design principles. Explore my work to see
              how I combine creativity with technical skill to deliver
              exceptional digital experiences.
            </p>
            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
              {/* item 1 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Age</div>
                <p>27 Years</p>
              </div>
              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Born in</div>
                <p>Bangladesh</p>
              </div>
              {/* item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>01727087717</p>
              </div>
              {/* item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>emamjion@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
