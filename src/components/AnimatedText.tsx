"use client";
import { motion } from "framer-motion";

const letterAnimation = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (i: [number, number]) => ({
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.3,
      ease: [0.2, 0, 0.1, 1] as [number, number, number, number],
      delay: i[0],
    },
  }),
};

const getLetter = (name: string) => {
  let letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    return letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
};

const AnimatedText = () => {
  return <div>Animated Text</div>;
};

export default AnimatedText;
