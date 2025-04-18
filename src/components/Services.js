import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//services data
const services = [
  {
    name: "Frontend-Development",
    description:
      "Worked as a frontend team laeder and developer for 6th months on sponsered industry project . Languages such as Javascript,React js , Tailwind css , Html ,CSS , MongoDB , Mysql ",
  },
  {
    name: "UI,UX Design",
    description:
      "Desiging through figma",
  },
  {
    name: "Content writer",
    description:
      "Deep research through the points , better english profeciency ",
  },
  {
    name: "Management",
    description:
      "Good with management work , can lead and guide the team for achieving the desired motive",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-3">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-14">
              I'm a frontend developer with 6 month of experience in real world
              project
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
