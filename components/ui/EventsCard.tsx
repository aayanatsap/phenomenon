"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image, { StaticImageData } from 'next/image';

export const EventsCard = ({title, content, rules, banner, key} : {
  title: string, 
  content: string,
  rules: string[],
  banner: StaticImageData,
  key: number
}) => {
  const [viewRules, setViewRules] = useState(false)

  return (
    <div className='w-screen md:h-screen md:mb-8 mb-36' key={key}>
      <div className='w-full flex justify-center mb-8'>
        <span className='text-electricBlue text-4xl md:text-5xl font-bold md:hidden text-center'>{title}</span>
      </div>
      <div className='flex w-full md:h-3/5 md:flex-row flex-col justify-center items-center gap-10 md:gap-16'>
        <div className=' md:h-[400px] md:w-[320px] w-[250px] h-[350px] rounded-2xl'>
          <Image src={banner}  alt="empty" className='w-full h-full rounded-2xl'/>
        </div>
        <div className='flex flex-col  md:w-1/3 w-2/3 items-center h-full gap-10'>
          <span className='text-electricBlue text-4xl md:text-4xl font-bold md:block hidden text-center'>{title}</span>
          <div className='grid grid-flow-row w-full h-full md:gap-0 gap-5'>
            <span className='font-semibold md:text-3xl text-2xl text-electricBlue'>{!viewRules ? ("Description") : ("Rules")}</span>
            <div className='overflow-auto md:h-[200px] h-[150px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-electricBlue'>
              <AnimatePresence>
                {!viewRules ? (
                  <motion.div
                  initial={{
                    opacity:0
                  }}
                  animate={viewRules ? {opacity: 0} : {opacity: 1}}
                  transition={{
                    duration:0.5
                  }}
                  className='w-full'
                  >
                    <span className='text-electricBlue md:text-lg text-base'>{content}</span>
                  </motion.div>
                ) : (
                  <motion.ul 
                  initial={{
                    opacity:0
                  }}
                  animate={viewRules ? {opacity: 1} : {opacity: 0}}
                  transition={{
                    duration: 0.5
                  }}
                  className=' text-electricBlue md:text-base text-sm w-full'>
                    {rules.map((rule, idx) => (
                      <li key={`ruleno${idx}`} className='list-disc list-inside'>{rule}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence> 
            </div>
            <button onClick={() => setViewRules(!viewRules)} className='bg-electricBlue text-galaxyBlue hover:scale-105 hover:text-electricBlue hover:bg-neonPurple duration-500 md:py-2 py-1.5 px-8 h-auto rounded-full self-end'>
              <span className='font-semibold md:text-base text-sm'>{viewRules ? ("View Description") : ("View Rules")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
