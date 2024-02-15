import React, { useState, useEffect } from "react";
import { navLinks } from "../contants";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/om-logo.png";
const Navbar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" z-10 sm:px-16 px-6 sm:py-4 py-3 w-full flex items-center m-w-7xl mx-auto bg-black">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="hero"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 object-contain" />
          <p className="text-[18px] text-white font-bold cursor-pointer">
            My &nbsp;<span className="text-red-500">P</span>ortfolio
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-gray-400"
              } hover:text-white text-[18px] font-medium  cursor-ponter
               `}
              onClick={() => setActive(link.title)}
            >
              <Link
                to={link.title}
                smooth
                duration={700}
                className="cursor-pointer"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            {toggle ? (
              <AiOutlineClose className="text-white" size={20} />
            ) : (
              <AiOutlineMenu className="text-white " size={20} />
            )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-gray-600 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-300"
                  } hover:text-white text-[16px] font-medium  cursor-ponter
               `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link
                    to={link.title}
                    smooth
                    duration={700}
                    className="cursor-pointer"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
