import React, { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li cursor-pointer" href="#home">
        <a href="#home" className="nav-link">Home</a>
      </li>
      <li className="nav-li cursor-pointer" href="#about">
        <a  href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-li cursor-pointer" href="#word">
        <a href="#projects" className="nav-link">Projects</a>
      </li>
      <li className="nav-li cursor-pointer" href="#contact">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="max-auto c-space">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
            href="/"
          >
            Gnana Thilak
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menuToggle"
              className="w-6 h-6 cursor-pointer"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{maxHeight: "100vh"}}
          transition={{duration: 1}}
          className="block overflow-hidden text-center sm:hidden"
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
