"use client";
import React, { useState, useLayoutEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image, { StaticImageData } from 'next/image';

export const EventsCard = ({title, content, rules, banner, key} : {
  title: string, 
  content: string,
  rules: string[],
  banner: StaticImageData,
  key: number
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const [viewRules, setViewRules] = useState(false)

  useLayoutEffect(() => {
    if (divRef.current) {
      // Set the height of the div in the state
      setHeight(divRef.current.clientHeight);
    }
  }, [content, rules, viewRules]);

  return (
    <div className='lg:w-screen lg:h-screen lg:mb-8 mb-16 lg:px-0 px-3 py-10 lg:py-0' key={key}>
      <div className='w-full flex justify-center mb-8'>
        <span className='text-lightblue text-4xl md:text-5xl font-bold lg:hidden text-center font-aquireBold'>{title}</span>
      </div>
      <div className='flex w-full lg:h-3/5 lg:flex-row flex-col justify-center items-center gap-10 lg:gap-16'>
        <div className='lg:h-[400px] lg:w-[320px] w-[250px] h-[350px] rounded-2xl'>
          <Image src={banner} alt="empty" className='w-full h-full rounded-2xl border-midgray border-2'/>
        </div>
        <div className='flex flex-col lg:w-1/3 w-5/6 items-center h-full gap-10'>
          <span className='text-lightblue text-4xl md:text-4xl font-bold lg:block hidden text-center font-aquireBold'>{title}</span>
          <div className='grid grid-flow-row w-full h-full lg:gap-0 gap-5'>
            <span className=' md:text-3xl text-2xl text-babyblue font-aquire'>{!viewRules ? ("Description") : ("Rules")}</span>
            <div className='overflow-auto lg:h-[200px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-babyblue'>
              <AnimatePresence>
                {!viewRules ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={viewRules ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='w-full md:h-[150px] lg:h-auto' // content div that adjusts dynamically
                    ref={divRef}
                  >
                    <span className='text-whitepink md:text-[18px] text-[16px] font-trench font-bold'>{content}</span>
                  </motion.div>
                ) : (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={viewRules ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full text-whitepink md:text-[18px] md:h-[150px] lg:h-auto text-[16px] gap-1.5 lg:gap-2 flex flex-col list-disc list-inside font-trench font-bold`} // rules div that will match content height
                    style={{ height: `${height}px` }}
                  >
                    {rules.map((rule, idx) => (
                      <li key={`ruleno${idx}`} className=''>{rule}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => setViewRules(!viewRules)}
              className='bg-electricBlue text-midgray hover:scale-105 hover:text-whitepink hover:bg-babyblue duration-500 lg:py-2 py-1.5 px-8 h-auto rounded-full self-end'
            >
              <span className='font-semibold md:text-base text-sm font-aquireBold'>
                {viewRules ? ("View Description") : ("View Rules")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
