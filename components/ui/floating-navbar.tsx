"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this utility function is correctly defined in your project
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';


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
          "grid grid-flow-col w-screen fixed bg-transparent z-[5000] lg:py-2 py-[1.094rem] items-center lg:pl-10 lg:pr-7 px-3",
          className
        )}
      >
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={!isEventsPage ? {
            opacity: showElements ? 1 : 0
          } : {
            opacity : 1,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Link href={"/"} className="justify-self-start hidden lg:block">
            <Image src={""} className="lg:size-[50px] size-[40px] bg-white" alt="logo" />
          </Link>
        </motion.div>
        <motion.div 
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={!isEventsPage ? {
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        } : {
          y : 0,
          opacity: 1
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
            animate={!isEventsPage ? {
              opacity: visible ? 1 : 0
            } : {
              opacity: 1
            }}
            transition={{
              duration: 0.4
            }}
            className="flex flex-row gap-5 justify-self-center justify-items-center pr-10">
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
                      "relative items-center flex text-[#E5E5E5] hover:text-[#0BB3BA] hover:scale-105 duration-500"
                    )}
                  >
                    <span className="font-semibold text-base px-0.5 text-center">
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
                    className="nav-underline bg-black h-[2.25px]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ y: -25, opacity: 0 }}
          animate={showElements ? { y: 0 , opacity: 1 } : { y: "90vh" , opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 45,
            duration: 0.2,
          }} className="justify-self-end hidden lg:block">
            <Link href={"/registrations"}
              className="flex items-center border-2 bg-[#FFF89A] border-[#FFF89A] hover:scale-105 duration-500 hover:bg-[#0BB3BA] hover:border-[#0BB3BA] justify-self-end font-medium relative text-[#1A1A1A] hover:text-[#E5E5E5] px-4 py-1.5 rounded-full"
            >
              <span>Register</span>
            </Link>
        </motion.div>
        <div className="lg:hidden flex justify-self-end items-center ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="w-7 h-7 text-[#0BB3BA]" /> // Close icon
            ) : (
              <AiOutlineMenu className="w-7 h-7 text-[#0BB3BA]" /> // Hamburger menu icon
            )}
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -58,
        }}
        transition={{
          type: "tween",
          duration: 0.4,
        }}
        className="fixed "
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -140 }}
              transition={{ type: "spring", stiffness: 400, duration: 0.1 }}
              className="lg:hidden fixed justify-self-end top-[60px] w-screen"
            >
              <div className="grid grid-flow-col bg-[#0B0C10] rounded-3xl border-2   border-[#FFF89A] py-5 md:px-5 px-3 md:gap-0 gap-2 justify-items-center">
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
                  >
                    <Link
                      key={`mobile-nav-link-${navItem.link}-${idx}`} // Unique key for mobile menu items
                      href={navItem.link}
                      className={
                        "items-center flex md:text-[#E5E5E5] text-[#E5E5E5] justify-items-center hover:text-[#0BB3BA] hover:scale-105 duration-500"
                      }
                    >
                      <span className="font-semibold lg:px-1 text-center md:text-base text-xs">
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
                      "items-center flex justify-items-center md:text-[#E5E5E5] text-[#E5E5E5] hover:text-[#0BB3BA] hover:scale-105 duration-500"
                    }
                  >
                    <span className="font-semibold lg:px-1 text-center md:text-base text-xs">
                      REGISTER
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence mode="wait">
        {showElements && (
          <motion.div
            initial={{ y: -30, opacity: 0,}}
            animate={{ y: 0, opacity: 1,}}
            exit={{ opacity: 0,}}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed -z-[1000]"
          >
            <Link href={"/"} className="justify-self-start lg:hidden fixed top-3 left-3">
              <Image src={""} className="lg:size-[40px] size-[40px] bg-white" alt="logo" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};