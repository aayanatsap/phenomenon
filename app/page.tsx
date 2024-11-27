"use client"
import Image from "next/image";
import Timer from "../components/ui/Timer"
import schoollogo from "../media/SchoolLogo.png"
import JumpLogo from "@/components/ui/Logo";
import Swipcards from "@/components/ui/swipcards";
import Link from "next/link";
import party from "../media/party.png"

export default function Home() {
  return (
      <div className=" w-screen -translate-y-10 mb-44">
        <div className="grid grid-flow-row w-screen justify-center justify-items-center lg:px-40 md:gap-10 mb-32">
          <JumpLogo/>
          <Timer/>
        </div>
        <div className="text-electricBlue grid lg:grid-flow-col grid-flow-row lg:justify-items-auto items-center justify-items-center mb-32 lg:px-20">
          <div className="grid lg:w-[45vw] md:justify-items-start justify-items-center">
            <div className="grid grid-flow-row justify-items-center lg:mb-0 mb-10 text-3xl">
              <span className="font-semibold">Presented by</span>
              <Image src={schoollogo} alt="schoollogo" className="md:size-[300px] size-[200px]"></Image>
              <span className="font-bold">PHENOMENON 2024</span>
            </div>
          </div>
          <div className="lg:w-[45vw] grid justify-items-end justify-self-end">
            <div className=" text-center font-semibold md:text-lg px-3 grid grid-flow-row lg:gap-4  gap-3">
              <div className="lg:mb-5 mb-5">
                <span className="text-bold text-3xl lg:text-4xl">About Us</span>
              </div>
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
              <Link href={"/about"} className="bg-neonPurple rounded-3xl text-electricBlue hover:scale-105 hover:text-crimsonRed hover:bg-black duration-500 px-4 py-1 flex md:w-[150px] w-[120px] md:text-base text-sm justify-center items-center justify-self-center mt-5">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <Swipcards/>
        <div className="grid lg:grid-flow-col grid-flow-row justify-items-center items-center mt-20 lg:mt-40">
          <div className="relative lg:h-[420px] lg:w-[570px] md:w-[550px] md:h-[300px] w-[320px] h-[180px] text-galaxyBlue font-bold md:text-5xl text-3xl flex items-center">
            <Image src={party} alt="party" className="absolute rounded-3xl w-full h-full -z-[1]"></Image>
            <div className="flex flex-col items-center w-full" >
              <span>DECEMBER</span>
              <span>20th AND 21st</span>
            </div>
          </div>
          <div className="grid lg:grid-flow-row md:grid-flow-col justify-items-center gap-5">
            <Link href={"/events"}>
              <div className="lg:size-[300px] md:size-[250px] size-[150px] rounded-full md:text-5xl text-[28px] font-bold text-electricBlue md:border-8 border-[6px] border-electricBlue flex items-center justify-center lg:mt-0 mt-10 hover:scale-105 duration-500 hover:cursor-pointer">
                <span>17 Events</span>
              </div>
            </Link>
            <div className="lg:grid lg:grid-flow-row flex md:flex-col flex-col self-center gap-3 w-full">
              <Link href={"/"} target="_blank" className="flex justify-center items-center lg:text-lg md:text-base text-sm text-electricBlue bg-transparent border-2 hover:border-opacity-0 border-electricBlue font-semibold hover:text-crimsonRed hover:bg-galaxyBlue hover:scale-105 duration-500 px-5 py-1 rounded-xl h-[40px]">
                View Brochure
              </Link>
              <Link href={"/"} target="_blank" className="flex items-center justify-center lg:text-lg md:text-base text-sm text-electricBlue bg-transparent border-2 hover:border-opacity-0 border-electricBlue font-semibold hover:text-crimsonRed hover:bg-galaxyBlue hover:scale-105 duration-500 px-5 py-1 rounded-xl h-[40px]">
                View Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
