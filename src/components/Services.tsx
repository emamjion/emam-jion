import { ReactNode } from "react";
import { BiSupport } from "react-icons/bi";
import { FaCode, FaPaintBrush, FaShoppingCart } from "react-icons/fa";

export type TService = {
  icon: ReactNode;
  title: string;
  description: string;
};

const services: TService[] = [
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Designing compelling engaging user experiences.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Developing robust, scalable websites for all devices.",
  },
  {
    icon: <FaShoppingCart />,
    title: "App Development",
    description: "Building secure, user-friendly online stores to drive sales.",
  },
  {
    icon: <BiSupport />,
    title: "Care & Support",
    description: "Providing updates, security, and support for performance.",
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] -top-12 place-items-center lg:place-content-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <span className="text-[36px] text-accent">{service.icon}</span>

                <h3 className="mt-5 text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
