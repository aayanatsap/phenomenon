"use client"
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function Artist() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity : 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration:1
        }}
      className="flex flex-col items-center justify-center h-[100vh] text-lightblue font-aquireBold">
        <div className="flex flex-col items-center lg:-translate-y-16 md:-translate-y-20 -translate-y-28 text-center">
          <h1 className="lg:text-8xl md:text-7xl text-5xl font-bold mb-4">COMING SOON</h1>
          <p className="mb-8 lg:text-base text-sm">The Artist for Phenomenon 2024 will be revelaed very soon!</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Artist