"use client"
import Image from "next/image";
import Timer from "../components/ui/Timer"
import logo from "../media/logo.png"
import JumpLogo from "@/components/ui/Logo";

export default function Home() {
  return (
      <div className="flex h-[500vh] w-screen -translate-y-10">
        <div className="grid grid-flow-row w-screen h-screen justify-center justify-items-center lg:px-40">
          <JumpLogo/>
          <Timer/>
        </div>
      </div>
  );
}
