"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly defined in your project
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import logo from "../../media/logo.png";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [visible, setIsVisible] = useState(true); // Navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll position
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track hover state per item
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [showElements, setShowElements] = useState(true);
  const currentPath = usePathname(); // Get the current path
  // Check if we are on the Events page and store it as a boolean
  const isEventsPage = currentPath === "/events";
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Scroll event handler
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    // If the sum of scrollY and window height equals or exceeds the document height, we are at the bottom
    if (scrollY + windowHeight >= documentHeight - 1) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowElements(false);
      } else {
        setShowElements(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    
    <AnimatePresence>
      <motion.div
        className={cn(
          "grid grid-flow-col w-screen fixed bg-transparent z-[5000] lg:py-2 py-2 items-center lg:pl-10 lg:pr-14 px-5",
          className
        )}
      >
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: showElements ? 1 : 0,
            visibility: showElements ? "visible" : "hidden"
          }}
          exit={{
            opacity : 1
          }}
          transition={{
            opacity:{duration: 0.4, delay:0.1},
            visibility: {delay: 0.1}
          }}
          className=""
        >
          <div className="lg:size-[100px] md:size-[85px] size-[70px]">
            <Link href={"/"} className=" md:w-[100px] justify-self-start md:relative fixed md:top-0 top-2.5 ">
              <Image src={logo} className="lg:size-[100px] md:size-[85px] size-[70px] hover:scale-110 duration-500 md:translate-x-0 -translate-x-1" alt="logo" />
            </Link>
          </div>
        </motion.div>
        <motion.div 
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.4,
        }}
        className="hidden lg:block">
          <div className="grid grid-flow-col pl-[66px]">
            <motion.div 
            initial={{
              opacity: 0
            }}
            animate={{  
              opacity: visible ? 1 : 0
            }}
            transition={{
              duration: 0.4
            }}
            className="flex flex-row gap-5 justify-self-center justify-items-center mr-[35px] py-5 bg-darkGalaxy bg-opacity-[0.87] px-[25px] rounded-3xl">
              {navItems.map((navItem, idx) => (
                <motion.div
                  key={`nav-link-${navItem.link}-${idx}`} // Unique key for each item
                  transition={{
                    duration: 0.5,
                  }}
                  className="self-center"
                >
                  <Link
                    href={navItem.link}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      "relative items-center flex text-lightblue hover:text-whitepink hover:scale-105 duration-500"
                    )}
                  >
                    <span className="text-base px-0.5 text-center font-aquireBold">
                      {navItem.name}
                    </span>
                  </Link>
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={
                      hoveredIndex === idx
                        ? { width: "100%", opacity: 0.4 }
                        : { width: 0, opacity: 0 }
                    }
                    transition={{
                      duration: 0.35,
                    }}
                    className="nav-underline bg-black h-[2.5px]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: -25, opacity: 0 }}
          animate={{ 
              y: showElements ? 0 : "85vh", // Adjust this value as necessary
              opacity: 1 
          }}
          transition={{
              type: "spring",
              stiffness: 45,
              duration: 0.2,
          }} className="justify-self-end hidden lg:block font-aquireBold">
          <Link href={"/registrations"}
              className="flex items-center text-whitepink border-2 bg-babyblue border-lightblue hover:scale-105 duration-500 hover:bg-lightblue hover:border-whitepink justify-self-end relative hover:text-white px-4 py-1.5 rounded-full"
          >
            <span>Register</span>
          </Link>
        </motion.div>
        <div className="lg:hidden flex justify-self-end items-center ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="w-7 h-7 text-lightblue" /> // Close icon
            ) : (
              <AiOutlineMenu className="w-7 h-7 text-lightblue" /> // Hamburger menu icon
            )}
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -84,
        }}
        transition={{
          type: "tween",
          duration: 0.4,
        }}
        className="fixed z-[5000]"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -140 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -140 }}
              transition={{ type: "spring", stiffness: 70, duration: 0.1 }}
              className="lg:hidden fixed justify-self-end top-[5.270rem] md:top-[95px] w-screen"
            >
              <div className="grid grid-flow-col bg-darkGalaxy rounded-full border-2   border-lightblue py-5 md:px-5 px-3 md:gap-0 gap-2 justify-items-center">
                {navItems.map((navItem, idx) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                      delay:0.1,
                      duration: 0.2
                    }}
                    key={`mobile-nav-link-${navItem.link}-${idx}-1`}
                  >
                    <Link
                      key={`mobile-nav-link-${navItem.link}-${idx}`} // Unique key for mobile menu items
                      href={navItem.link}
                      className={
                        "items-center flex text-lightblue justify-items-center hover:text-white font-aquire hover:scale-105 duration-500"
                      }
                    >
                      <span className="font-semibold lg:px-1 text-center md:text-base text-[10px]">
                        {navItem.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{
                      delay:0.1,
                      duration: 0.2
                    }}
                  >
                  <Link
                    href={"/registrations"}
                    className={
                      "items-center flex justify-items-center text-lightblue font-aquire hover:text-whitepink hover:scale-105 duration-500"
                    }
                  >
                    <span className="font-semibold lg:px-1 text-center md:text-base text-[10px]">
                      REGISTER
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};