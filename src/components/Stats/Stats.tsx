import StatsItem from "./StatsItem";

export type TStatsDataProps = {
  endCountNum: number;
  endCountText: string;
  text: string;
};

const statsData: TStatsDataProps[] = [
  {
    endCountNum: 1,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 70,
    endCountText: "+",
    text: "Website built",
  },
  {
    endCountNum: 12,
    endCountText: "+",
    text: "Tech Stack",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;
