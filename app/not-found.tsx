"use client"
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NotFound() {
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
      className="flex flex-col items-center justify-center h-[100vh] text-[#0BB3BA]">
        <div className="flex flex-col items-center lg:-translate-y-16 md:-translate-y-20 -translate-y-28">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="mb-8 lg:text-base text-sm">Oops! The page you're looking for doesn't exist.</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}