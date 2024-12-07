"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../media/logo.png"
import { BsGlobe } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export function Footer() {
  const currentPath = usePathname(); // Get the current path
  const isEventsPage = currentPath === "/events"; // Check if we are on the Events page

  return (
    <footer className='grid grid-flow-row bg-bacgr w-screen md:px-10 md:py-8 px-4 py-5 md:gap-3 gap-1.5'>
      <div className='grid grid-flow-col items-center md:pl-4 md:pr-5 pr-3 pl-2 md:mb-3 mb-2'>
        <div className='justify-self-start'>
            <div className='flex flex-col juistify-self-start justify-center items-center'>
              <Link href={"/"} className='flex justify-items-center'>
                  <Image src={logo} alt='logo' className='md:size-[150px] size-[100px] hover:scale-105 duration-500 justify-self-center'/>
              </Link>
              <div className="grid grid-flow-col w-1/3 justify-self-center justify-items-center -translate-x-0.5">
                <Link href={"https://sjbhs.edu.in/"}>
                  <BsGlobe className="fill-whitepink hover:fill-midgray hover:scale-105 duration-500 mr-1"/>
                </Link>
                <Link href={"https://www.instagram.com/phenomenon.sjbhs/"}>
                  <FaInstagram className="fill-whitepink hover:fill-midgray hover:scale-105 duration-500"/>
                </Link> 
              </div>
            </div>
        </div>
        <div className='justify-self-end'>
            <div className='flex flex-col md:text-base text-sm font-aquire'>
                <span className='font-bold mb-1 text-midgray font-aquireBold md:text-lg text-base'>CHECK OUT</span>
                <Link href={"/"} className='text-lightblue hover:text-whitepink duration-500 font-semibold'>Home</Link>
                <Link href={"/about"} className='text-lightblue hover:text-whitepink duration-500 font-semibold'>About</Link>
                <Link href={"/artist"} className='text-lightblue hover:text-whitepink duration-500 font-semibold'>Artist</Link>
                <Link href={"/events"} className='text-lightblue hover:text-whitepink duration-500 font-semibold'>Events</Link>
                <Link href={"/rules"} className='text-lightblue hover:text-whitepink duration-500 font-semibold'>Rules</Link>
                <Link href={"/contact"} className='text-lightblue hover:text-whitepink duration-500 font-semibold'>Contact</Link>
            </div>
        </div>
      </div>
      <hr className='w-full border-t border-aquaBlue'/>
      <div className='flex justify-center md:text-sm my-3 text-xs text-center'>
        <span className="text-lightblue font-aquire">© 2024 <a href="https://sjbhs.edu.in" target='__blank' className='hover:underline'>St Joseph's Boys' High School</a>. All Rights Reserved.</span>
      </div>
      <hr className='w-full border-t border-aquaBlue'/>
      <div className="flex flex-col w-full md:text-sm text-xs font-trench">
        <span className="text-center text-lightblue font-bold font-aquire">Website developed by</span>
        <p className="text-center text-white font-aquire">
          <span className='text-center text-whitepink font-semibold'><a href=" https://www.linkedin.com/in/roshan-pramod-0b7806322/" target="__blank" className=""><span className="hover:text-midgray duration-500 font-bold">T Roshan Pramod</span></a></span> || <span className='text-center text-whitepink font-semibold'><a href="" target="__blank" className=""><span className="hover:text-midgray duration-500 font-bold">Editors x Clients LLC</span></a></span>
        </p>
      </div>
    </footer>
  );
}
