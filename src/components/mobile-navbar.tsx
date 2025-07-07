"use client";

import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuCircleUserRound } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Rent", sublinks: ["All Equipment", "Popular Rentals", "Boom Lifts"] },
  { name: "Buy", sublinks: ["All Used Equipment", "Popular Used Equipment"] },
  { name: "Training", sublinks: ["Course Catalog", "Training Credentials"] },
  { name: "Company", sublinks: ["About Us", "Careers"] },
];

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="h-[50px] lg:hidden">
      <nav className="flex items-center justify-between text-3xl py-5 px-4">
        <button aria-label="Open Menu" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu />
        </button>

        <Image src="/logo.png" alt="logo" height={150} width={200} />

        <button aria-label="View Cart">
          <MdShoppingCart />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 w-[300px] h-screen bg-white z-50 overflow-y-auto flex flex-col"
            >
              <div className="p-5 flex items-center justify-between bg-[#000a50]">
                <Image src="/logo.png" alt="logo" height={100} width={100} />
                <button
                  aria-label="Close Menu"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 p-3 text-base font-semibold text-gray-800">
                  <LuCircleUserRound />
                  <p>Sign In / Register</p>
                </div>
                <div className="flex items-center gap-2 p-3 text-base font-semibold">
                  <TfiWorld />
                  <p>English</p>
                </div>
                <div className="flex items-center gap-2 p-3 text-base font-semibold">
                  <BsTelephone />
                  <p>515.215.5249</p>
                </div>

                {/* Nav Links */}
                <div className="mt-6 space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex justify-between items-center w-full text-lg font-bold text-gray-800 py-3"
                      >
                        {link.name}
                        <ChevronDown
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 space-y-3 text-base"
                          >
                            {link.sublinks.map((sublink) => (
                              <li key={sublink} className="text-gray-700 cursor-pointer">
                                {sublink}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
