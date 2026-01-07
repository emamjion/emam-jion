import AnimatedText from "./AnimatedText";
import Cards from "./Cards/Cards";

const Journey = () => {
  return (
    <section className="bg-red-200 py-96" id="journey">
      <div className="container mx-auto">
        <AnimatedText
          text="My Professional Journey"
          textStyles="text-primary text-[36px] tracking-[-0.02em] leading-[44px] font-semibold mb-[30px] text-center"
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;
