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
      } flex items-center lg:px-12 lg:h-[120px] text-electricBlue bg-galaxyBlue bg-opacity-70 w-screen border-t-2 border-electricBlue border-opacity-70`}
    >
      <div className="grid grid-flow-col items-center w-full">
        <div className="flex flex-row items-center">
          <Link href={"/"} className="justify-self-start hidden lg:block hover:scale-110 duration-500 ">
            <Image src={logo} className="lg:size-[100px] size-[40px]" alt="logo" />
          </Link>
          <div className="grid grid-flow-row gap-2">
            <span className="text-sm text-aquaBlue">© 2024 St <a href="www.sjbhs.edu.in" className="hover:underline">Joseph's Boys' High School</a>. All Rights Reserved.</span>
            <div className="flex flex-row gap-3 items-center">
              <Link href={"https://www.facebook.com/Sjbhsbangalore/"} target="__blank">
                <FaFacebookF className="text-aquaBlue hover:scale-105 hover:cursor-pointer duration-500"/>
              </Link>
              <Link href={""} target="__blank">
                <FaInstagram className="size-[19.5px] text-aquaBlue hover:scale-105 hover:cursor-pointer duration-500" />
              </Link>
              <Link href={"www.sjbhs.edu.in"} target="__blank">
                <BsGlobe className="text-aquaBlue hover:scale-105 hover:cursor-pointer duration-500"/>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-self-end items-center">
          <span className="text-aquaBlue duration font-light">Website developed by: <a href=" https://www.linkedin.com/in/roshan-pramod-0b7806322/" target="__blank" className=""><span className="hover:text-crimsonRed text-softYellow duration-500 font-normal">T Roshan Pramod</span></a></span>
        </div> 
      </div>
    </div>
  );
}
