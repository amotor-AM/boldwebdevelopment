"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-transparent py-2 px-4 lg:px-16 w-full relative pb-10 z-50">
    <nav className="flex justify-between items-center mx-auto max-w-screen-xl relative">
      <Link href="/" onClick={closeMenu}>
        <Image src={Logo} alt="Logo" width={100} height={100} className="mr-3" />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-white hover:text-gray-400">
          Home
        </Link>
        <Link href="/About" className="text-white hover:text-gray-400">
          About
        </Link>
        <Link href="/Services" className="text-white hover:text-gray-400">
          Services
        </Link>
        <Link href="/Contact" className="text-white hover:text-gray-400">
          Contact
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="https://boldwebdevelopment.hbportal.co/public/6680abc60c7050001919bd73" className="text-white bg-[#ff5e1a] hover:bg-[#9e9e9e] px-4 py-2 rounded">
          Book Now
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white z-51"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "transform rotate-45" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d={isOpen ? "M6 6L14 14M6 14L14 6" : "M3 5h14M3 10h14M3 15h14"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-[#030303] bg-opacity-60 text-white flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center h-full w-full justify-center space-y-10">
              <li>
                <Link href="/" className="text-2xl hover:text-gray-400" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-2xl hover:text-gray-400" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Services" className="text-2xl hover:text-gray-400" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-2xl hover:text-gray-400" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://boldwebdevelopment.hbportal.co/public/6680abc60c7050001919bd73"
                  className="text-white bg-[#ff5e1a] hover:bg-[#9e9e9e] px-4 py-2 rounded"
                  onClick={closeMenu}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </header>
  );
};

export default Header;
