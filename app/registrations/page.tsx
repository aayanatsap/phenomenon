"use client";
import React from 'react'
import { Individual } from "@/components/ui/individual";
import { Institutional } from "@/components/ui/institutional";

import Link from "next/link";
export default function page() {
  return (
    <div className="mb-32">
      <section className="">
        <div className="py-8 px-4 mx-auto my-1 lg:py-16 lg:px-6">
          <div className="mx-auto lg:px-0 md:px-10 px-1 lg:max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 md:text-4xl text-2xl tracking-tight font-extrabold text-purple-600 dark:text-white mun-gradient">
              REGISTRATIONS ARE OPEN!
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {`Have questions or need assistance? Contact our team at mun@sjbhs.edu.in or send a message to +91 80886 70274. We're here to help! Check the Policy page before registering. `}
            </p>
          </div>
          <div className="hidden lg:block">
            <div className=" lg:grid lg:grid-cols-2 lg:space-y-0  -space-y-28 -mt-16 -mb-20">
            <Individual/>
            <Institutional/>
            </div>
          </div>
          <div className="block lg:hidden">
          </div>
        </div>
      </section>
    </div>
  )
}
