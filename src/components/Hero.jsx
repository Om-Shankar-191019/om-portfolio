import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import omsPic from "../assets/omsPic.jpg";
import { Link } from "react-scroll";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto" name="Home">
      <div className="sm:px-16 px-6 absolute insert-0 top-[18px] max-w-7xl mx-auto flex flex-row items-start gap-5 ">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500 to-black" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white font-['Poppins']`}>
            Hi, I'm <span className="text-violet-500">Om Shankar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            I develop user-friendly interfaces{" "}
            <br className="sm:block hidden" /> and web application
          </p>

          <button className="mt-8 py-2 px-3 outline-none border border-gray-400 text-green-200 rounded-lg">
            <a
              href="/novaResumefull.pdf"
              className="flex justify-between items-center w-full text-white"
              download="OM_Resume"
              target="_blank"
              rel="noreferrer"
            >
              <>
                Get Resume <BsFillPersonLinesFill size={30} className="ml-4" />
              </>
            </a>
          </button>
        </div>
      </div>

      <div className="sm:px-16 px-6 absolute insert-0 bottom-[40px] right-0 max-w-7xl mx-auto flex flex-row items-start gap-5 ">
        <img
          src={omsPic}
          alt=""
          className="w-64 rounded-full shadow-md shadow-violet-500 hover:-translate-y-4 duration-300"
        />
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-80 h-80 bg-gradient-to-t from-violet-500 to-black" />
          <div className="w-5 h-5 rounded-full bg-violet-500" />
        </div>
      </div>
      <div className="hidden  absolute bottom-24  w-full md:flex justify-center item-center">
        <Link
          to="About"
          smooth
          duration={500}
          className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-500 flex  justify-center items-start p-2 cursor-pointer"
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-white "
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
