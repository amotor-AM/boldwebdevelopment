"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/app/assets/images/logo.png"
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
            <header className="bg-transparent w-[100] py-2 px-4 lg:px-16 w-4/5 pb-10">
                <nav className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={100}
                            height={100}
                            className="mr-3"
                        />
                    </a>
                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#" className="text-white hover:text-gray-400">Home</a>
                        <a href="#" className="text-white hover:text-gray-400">About</a>
                        <a href="#" className="text-white hover:text-gray-400">Services</a>
                        <a href="#" className="text-white hover:text-gray-400">Contact</a>
                        <a href="#" className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Book Now</a>
                    </div>
                    <button
                        className="lg:hidden text-white"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                                }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="lg:hidden absolute top-16 left-0 right-0 bg-[#030303] text-white shadow-md z-50"
                            >
                                <ul className="flex flex-col space-y-4 py-4 px-4">
                                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                                    <li><a href="#" className="hover:text-gray-400">Services</a></li>
                                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                                    <li><a href="#" className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Book Now</a></li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
        </header>
    );
};

export default Header;
