"use client";
import React from 'react'
import { Individual } from "@/components/ui/individual";
import { Institutional } from "@/components/ui/institutional";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../media/logo.png'

export default function page() {
  const rules = [
    "All prices are inclusive of GST (if applicable).",  
    "Institutional delegation: An institution does not need to send a team to every event. Participation in at least 10 events is required for institution registration.",  
    "A clear list of all members of an institutional delegation is required for registration (irrespective of the number of delegations).",  
    "‘Individual’ participants need not be from the same institution.",  
    "Registrations open on December 5, 2024.",  
    "There will be no Best Institution Award.",  
    "General Passes for each day will be available for purchase on that day on campus.",  
    "Registration for an event includes entry to the campus, concert/artist performance access and event participation on the day of the event only. All events except Movie Business are one-day events only. For entry into the campus on the other day, a general pass will have to be purchased.",  
    "No refunds will be processed.",  
    "Registration for multiple events is permitted. Please check the schedule to ensure that there are no clashes.",  
  ]

  return (
    <div className="mb-32">
      <section className="">
        <div className="py-8 px-4 mx-auto my-1 lg:py-16 lg:px-6">
          <div className="mx-auto lg:px-0 md:px-10 px-1 lg:max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="lg:mb-12 mb-7 md:text-4xl text-2xl tracking-tight font-extrabold text-purple-600 dark:text-white mun-gradient">
              REGISTRATIONS ARE OPEN!
            </h2>
            <ul className='text-electricBlue text-left px-3 md:px-5 lg:px-0'>
              {rules.map((rule, idx) => (
                <li key={idx} className='list-disc list-outside md:text-lg text-sm font-semibold'>{rule}</li>
              ))}
            </ul>
            <div className='md:text-xl text-base font-semibold text-neonPurple flex flex-col items-center px-2 mt-3'>
              <span className='md:text-2xl text-gl font-bold'>PRIZES</span>
              <span>1st Place: <span className='font-bold'>₹2000</span> voucher per participant</span>
              <span>2nd Place: <span className='font-bold'>₹1000</span> voucher per participant</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className=" lg:grid lg:grid-cols-2 lg:space-y-0  -space-y-28 -mt-16 -mb-20">
            <Individual/>
            <Institutional/>
            </div>
          </div>
          <div className=" lg:hidden grid grid-flow-row justify-items-center gap-24 mb-14">
            <div className="inter-var text-center">
              <div className="bg-purple-900 relative  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-6 py-12 border text-center flex flex-col items-center">
                <div
                  className="text-3xl font-bold text-neutral-600 dark:text-white mx-auto"
                >
                  INDIVIDUAL
                </div>
                <div
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
                >
                  <div>
                    <div className="flex flex-col justify-center items-center my-4">
                      <span className="text-5xl font-extrabold">₹300 per person</span>
                    </div>

                    <ul role="list" className="mb-10 space-y-2 text-center">
                      <li className="text-center">
                        <span>Some events require more than one participant</span>
                      </li>
                      <li className="text-center">
                        <span>you can register for a maximum of 2 events</span>
                      </li>
                      <li className="text-center">
                        <span>you can only register for one event per day</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full mt-0 bg-opacity-0">
                  <Image
                    src={logo}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-contain rounded-xl "
                    alt="thumbnail"
                  />
                </div>
                <div  className="justify-center items-center mt-12 w-full inline-block">
                <Link href={"/registrations/individual/"}>
                <div
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-[80%] mx-auto"
                  >
                    REGISTER NOW!
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="inter-var text-center">
              <div className="bg-purple-900 relative  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-6 py-12 border text-center flex flex-col items-center">
                <div
                  className="text-3xl font-bold text-neutral-600 dark:text-white mx-auto"
                >
                  Institutional
                </div>
                <div
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
                >
                  <div>
                    <div className="flex flex-col justify-center items-center my-4">
                      <span className="text-5xl font-extrabold">₹300 per person</span>
                    </div>

                    <ul role="list" className="mb-10 space-y-2 text-center">
                      <li className="text-center">
                        <span>You must register for a miminum of 6 events</span>
                      </li>
                      <li className="text-center">
                        <span>10% discount will be given on the final pricing</span>
                      </li>
                      <li className="text-center">
                        <span>You can register for a maximum of one event per day</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full mt-0 bg-opacity-0">
                  <Image
                    src={logo}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-contain rounded-xl "
                    alt="thumbnail"
                  />
                </div>
                <div className="justify-center items-center mt-12 w-full inline-block">
                <Link href={"/registrations/delegation/"}>
                  <div
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-[80%] mx-auto"
                  >
                    REGISTER NOW!
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
