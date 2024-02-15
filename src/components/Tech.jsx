import React from "react";
import { technologies } from "../contants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const SkillDisc = ({ icon, index }) => (
  <motion.div variants={fadeIn("right", "spring", 0.18 * index, 0.75)}>
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="w-28 h-28 rounded-full bg-white flex items-center justify-center"
    >
      <div className=" w-20 h-20 rounded-full shadow-md shadow-violet-500 bg-white flex items-center justify-center">
        <img src={icon} alt={icon} className="w-[80%] h-[80%] object-contain" />
      </div>
    </div>
  </motion.div>
);
const Tech = () => {
  return (
    <motion.section
      name="Skills"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amout: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>What I know</h2>{" "}
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 text-white justify-center">
        {technologies.map((technology, index) => (
          <SkillDisc
            key={technology.name}
            icon={technology.icon}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Tech;
