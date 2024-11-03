"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../media/logo.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

export function Footer() {
  const currentPath = usePathname(); // Get the current path
  const isEventsPage = currentPath === "/events"; // Check if we are on the Events page

  return (
    <div
      className={`${
        isEventsPage ? "fixed bottom-0" : "relative"
      } grid md:grid-flow-col grid-flow-row md:gap-0 gap-2 md:py-0 py-2.5 items-center md:pr-1 lg:px-12 md:px-10 pr-2 pl-1 lg:h-[120px] md:h-[100px] text-electricBlue bg-galaxyBlue bg-opacity-70 w-screen border-t-2 border-electricBlue border-opacity-70`}
    >
      <div className="grid grid-flow-col md:w-full">
        <Link href={"/"} className="md:justify-self-start md:hidden justify-self-center hover:scale-110 duration-500 ">
          <Image src={logo} className="lg:size-[100px] md:size-[70px] size-[55px]" alt="logo" />
        </Link>
        <div className="grid md:grid-flow-col grid-flow-row items-center w-full">
          <div className="flex flex-row items-center">
            <Link href={"/"} className="md:justify-self-start md:block hidden justify-self-center hover:scale-110 duration-500 ">
              <Image src={logo} className="lg:size-[100px] md:size-[70px] size-[50px]" alt="logo" />
            </Link>
            <div className="grid grid-flow-row gap-2 justify-items-center">
              <span className="text-xs text-aquaBlue text-center">© 2024 St <a href="www.sjbhs.edu.in" className="hover:underline">Joseph's Boys' High School</a>. All Rights Reserved.</span>
              <div className="flex flex-row gap-3 items-center md:justify-start justify-center md:w-auto w-full">
                <Link href={"https://www.facebook.com/Sjbhsbangalore/"} target="__blank">
                  <FaFacebookF className="text-aquaBlue md:size-auto size-[12.5px] hover:scale-105 hover:cursor-pointer duration-500"/>
                </Link>
                <Link href={""} target="__blank">
                  <FaInstagram className="md:size-[19.5px] size-[14.5px] text-aquaBlue hover:scale-105 hover:cursor-pointer duration-500" />
                </Link>
                <Link href={"www.sjbhs.edu.in"} target="__blank">
                  <BsGlobe className="text-aquaBlue md:size-auto size-[12.5px] hover:scale-105 hover:cursor-pointer duration-500"/>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:justify-self-end justify-self-center items-center md:block">
            <span className="text-aquaBlue md:text-base text-xs duration font-light">Website developed by: <a href=" https://www.linkedin.com/in/roshan-pramod-0b7806322/" target="__blank" className=""><span className="hover:text-crimsonRed text-softYellow duration-500 font-normal">T Roshan Pramod</span></a></span>
          </div> 
        </div>
      </div>
      <div className="w-full px-3 md:hidden">
        <hr className="border-t border-electricBlue w-full opacity-70" />
      </div>
      <div className=" md:justify-self-end justify-self-center items-center md:hidden">
        <span className="text-aquaBlue md:text-base text-xs duration font-light">Website developed by: <a href=" https://www.linkedin.com/in/roshan-pramod-0b7806322/" target="__blank" className=""><span className="hover:text-crimsonRed text-softYellow duration-500 font-normal">T Roshan Pramod</span></a></span>
      </div>
    </div>
  );
}
