// app/components/Timer.tsx
"use client";

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
    <div className="flex">
      <div className="flex flex-col items-center justify-center w-full h-[300px] md:px-36 text-electricBlue border-opacity-30 bg-transparent border border-electricBlue rounded-[50px]">
        <span className="text-xl font-bold">JOIN US ON</span>
        <h2 className="text-5xl font-semibold text-orangeYellow">DECEMBER</h2>
        <div className="grid grid-flow-col gap-10 font-bold text-xl text-orangeYellow">
          <div>20th</div>
          <div>21st</div>
        </div>
        <div className="grid grid-flow-col gap-5 mt-5">
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="text-5xl">{timeLeft.days}</span>
            <span className="text-orangeYellow">Days</span>
          </div>
          <span className="text-5xl font-bold">:</span>
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="text-5xl">{timeLeft.hours}</span>
            <span className="text-orangeYellow">Hours</span>
          </div>
          <span className="text-5xl font-bold ">:</span>
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="text-5xl">{timeLeft.minutes}</span>
            <span className="text-orangeYellow">Minutes</span>
          </div>
          <span className="text-5xl font-bold">:</span>
          <div className="grid grid-flow-row justify-items-center gap-1">
            <span className="text-5xl">{timeLeft.seconds}</span>
            <span className="text-orangeYellow">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
