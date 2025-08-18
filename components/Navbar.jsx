import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="gradient" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <div></div>
        <ul
          className={`hidden md:flex items-center gap-8 lg:gap-10 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo text-lg inline-block transition-transform duration-300 hover:-translate-y-0.5" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg inline-block transition-transform duration-300 hover:-translate-y-0.5" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg inline-block transition-transform duration-300 hover:-translate-y-0.5" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg inline-block transition-transform duration-300 hover:-translate-y-0.5" href="#work">
              My Works
            </a>
          </li>
          <li>
            <a className="font-Ovo text-lg inline-block transition-transform duration-300 hover:-translate-y-0.5" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="relative mr-3 w-10 h-10 flex items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={assets.sun_icon} alt="sun" className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={assets.moon_icon}
                    alt="moon"
                    className="w-6 h-6"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* ---------- mobile menu ------------ */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-100 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeMenu}>
              My Works
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
