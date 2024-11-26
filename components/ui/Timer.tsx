// app/components/Timer.tsx
"use client";
// import { CanvasRevealEffect } from "./canvas-reveal-effect";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const timerId = setInterval(() => {
        const today = new Date().getTime(); // Get the current time in milliseconds
        const finalDay = new Date("24 dec 2024 00:00:00").getTime(); // Target date in milliseconds

        const seconds = 1000;
        const minutes = seconds * 60;
        const hours = minutes * 60;
        const days = hours * 24;

        let time = finalDay - today;

        if (time > 0) {
            const d = Math.floor(time / days).toString().padStart(2, "0");
            const h = Math.floor((time % days) / hours).toString().padStart(2, "0");
            const m = Math.floor((time % hours) / minutes).toString().padStart(2, "0");
            const s = Math.floor((time % minutes) / seconds).toString().padStart(2, "0");

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
        } else {
            clearInterval(timerId);
        }
        }, 1000);

        return () => clearInterval(timerId); // Clear the interval on component unmount
    }, []);

  return (
    <div className="flex mt-8 md:mt-0">
      <div className="flex flex-col items-center justify-center w-[90vw] lg:w-full md:h-[300px] h-[250px] md:pb-0 pb-2 md:px-36 px-5 text-electricBlue border-opacity-30 bg-transparent border border-electricBlue rounded-[50px]">
        <span className="md:text-xl text-lg font-bold">JOIN US ON</span>
        <h2 className="md:text-5xl text-4xl font-semibold text-orangeYellow">DECEMBER</h2>
        <div className="grid grid-flow-col gap-10 font-bold md:text-xl text-base text-orangeYellow">
          <div>20th</div>
          <div>21st</div>
        </div>
        <div className="grid grid-flow-col md:gap-5 gap-3 md:mt-5 mt-3">
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="md:text-5xl text-3xl">{timeLeft.days}</span>
            <span className="text-orangeYellow md:text-base text-xs">Days</span>
          </div>
          <span className="md:text-5xl text-3xl font-bold">:</span>
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="md:text-5xl text-3xl">{timeLeft.hours}</span>
            <span className="text-orangeYellow  md:text-base text-xs">Hours</span>
          </div>
          <span className="md:text-5xl text-3xl font-bold ">:</span>
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="md:text-5xl text-3xl">{timeLeft.minutes}</span>
            <span className="text-orangeYellow md:text-base text-xs">Minutes</span>
          </div>
          <span className="md:text-5xl text-3xl font-bold">:</span>
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="md:text-5xl text-3xl">{timeLeft.seconds}</span>
            <span className="text-orangeYellow md:text-base text-xs">Seconds</span>
          </div>
        </div>
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
      </div>
    </div>
  );
};

export default CountdownTimer;
