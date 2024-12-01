"use client"
import Image from "next/image";
import Timer from "../components/ui/Timer"
import schoollogo from "../media/SchoolLogo.png"
import JumpLogo from "@/components/ui/Logo";
import Swipcards from "@/components/ui/swipcards";
import Link from "next/link";
import party from "../media/party.png"
import { PinContainer } from "@/components/ui/3d-pin";

export default function Home() {
  return (
      <div className=" w-screen -translate-y-10 mb-60 overflow-x-hidden">
        <div className="relative grid grid-flow-row w-screen justify-center justify-items-center lg:px-40 md:gap-10">
          <div className="grid grid-flow-row w-screen justify-center justify-items-center lg:px-40 md:gap-10 lg:mb-32 mb-24">
            <JumpLogo/>
            <Timer/>
          </div>
        </div>
        <div className="relative text-electricBlue grid lg:grid-flow-col grid-flow-row lg:justify-items-auto items-center justify-items-center mb-32 lg:px-20">
          <div className="text-electricBlue w-full grid lg:grid-flow-col grid-flow-row lg:justify-items-auto items-center justify-items-center ">
            <div className="grid lg:grid-flow-row md:grid-flow-col justify-items-center items-center lg:gap-5 lg:mb-0 mb-14">
              <div className="grid justify-items-center items-center h-full w-full bg-transparent mb-5 lg:mb-0">
                <div className="lg:size-[300px] md:size-[250px] size-[200px] rounded-full lg:text-[44px] md:text-[36px] text-[30px] font-bold text-whitepink md:border-8 border-[6px] border-babyblue flex items-center justify-center lg:mt-0 hover:cursor-pointer hover:scale-105 duration-500">
                  <span className="font-aquireBold">20 Events</span>
                </div>
              </div>
              <div className="lg:grid lg:grid-flow-row flex md:flex-col flex-col self-center gap-3 lg:w-full w-[200px] font-aquireBold">
                <Link href={"https://drive.google.com/file/d/1_JpW59UTqZ_N2i-3rJyqW24L4kFTlqlk/view?usp=sharing"} target="_blank" className="flex justify-center items-center lg:text-lg md:text-base text-sm text-whitepink bg-transparent border-2 hover:border-opacity-0 border-lightblue font-semibold hover:text-lightgray hover:bg-galaxyBlue hover:scale-105 duration-500 px-5 py-1 rounded-xl h-[40px]">
                  View Brochure
                </Link>
                <Link href={"/"} target="_blank" className="flex items-center justify-center lg:text-lg md:text-base text-sm text-whitepink bg-transparent border-2 hover:border-opacity-0 border-lightblue font-semibold hover:text-lightgray hover:bg-galaxyBlue hover:scale-105 duration-500 px-5 py-1 rounded-xl h-[40px]">
                  View Schedule
                </Link>
              </div>
            </div>
            <div className="lg:w-[45vw] grid justify-items-end justify-self-end">
              <div className=" text-center font-semibold md:text-xl px-5 md:px-24 lg:px-0 grid grid-flow-row lg:gap-4  gap-3 font-trench">
                <div className="lg:mb-5 mb-5">
                  <span className="text-bold text-3xl lg:text-4xl font-aquireBold text-lightblue">ABOUT US</span>
                </div>
                <div className="text-whitepink">
                <p>
                  We are elated to announce the twelfth edition of our
                  trailblazing and exciting Cultural and Carnival Festival,
                  Phenomenon
                </p>
                <p>
                  Phenomenon, the vibrant fest organized by St. Joseph’s
                  Boys’ High School, is a celebration like no other!
                </p>
                <p>
                  If you are looking to make memories that last a lifetime Phenomenon 2024 is the place to be!
                </p>
                <p>
                  So, what are you waiting for? The spotlight awaits you!
                </p>
                </div>
                <Link href={"/about"} className="bg-lightblue rounded-3xl text-babyblue border-babyblue hover:scale-105 hover:text-whitepink hover:bg-babyblue duration-500 px-4 py-1 flex md:w-[150px] w-[120px] md:text-sm text-xs justify-center items-center justify-self-center mt-5 font-aquire">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Swipcards/>
      </div>
  );
}