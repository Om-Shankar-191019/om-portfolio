import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../contants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[220px] sm:mx-0 w-full mx-12">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-violet-800 border border-white rounded-[20px] py-5 px-12 min-h-[220px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <motion.section
      name="About"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amout: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>{" "}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-gray-300 text-[17px] max-w-3xl leading-[30px] mt-4"
      >
        A developer having deep passion for creating engaging user experiences
        that connect with audiences. I am eager to expand my knowledge of
        emerging technologies and work collaboratively with others to solve
        complex problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 text-white">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default About;
