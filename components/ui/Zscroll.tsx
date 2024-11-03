"use client"
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useViewportScroll } from 'framer-motion';
import { list } from 'postcss';


type CardData = {
  title: string;
  content: string;
  rules: string[];
  banner: string;
};

export const ZoomScrollCards = ({
  cardsData
} : {
  cardsData : CardData[]
}) => {
  const { scrollY } = useViewportScroll();
  const [currentCard, setCurrentCard] = useState(0);
  const [viewRules, setViewRules] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollIndex = Math.floor(scrollY.get() / window.innerHeight);
      setCurrentCard(scrollIndex);
    };

    const unsubscribe = scrollY.onChange(onScroll);
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setViewRules(false);
  }, [currentCard]);

  return (
    <div className="h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {cardsData.map((card, index) => (
          <AnimatePresence key={index}>
            {currentCard === index && (
              <motion.div
                className="absolute w-5/6 h-3/4 md:w-5/6 lg:h-4/5 md:h-3/4 bg-transparent shadow-lg rounded-lg p-6 flex flex-col items-center justify-start text-left"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ zIndex: currentCard === index ? 10 : 0 }}
              >   
                <div className="grid grid-flow-col h-full w-full gap-20">
                  <div className="h-[420px] bg-white rounded-3xl md:w-[280px] lg:w-[340px] self-center justify-self-start"></div>
                  <div className="grid grid-flow-row lg:py-10 lg:px-14 gap-6 h-full w-full">
                    <div>
                      <h2 className="text-4xl font-bold justify-self-center text-[#0BB3BA]">{card.title}</h2>
                    </div>
                    {/* Always show title at the top */}      
                    <div className='w-5/6 flex justify-items-center justify-self-center'>
                      <AnimatePresence mode="wait" initial={false}>
                        {!viewRules ? (
                          <motion.div
                            key="description"
                            initial={{ y: 0, opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
                            className="flex flex-col px-5"
                          >
                            <p className='text-xl text-center text-[#0BB3BA]'>{card.content}</p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="rules"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
                            className="flex flex-col"
                          >
                            <span className=" font-semibold mb-2 text-[#0BB3BA] text-2xl">Rules:</span>
                            <ul className="list-disc list-inside space-y-2 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#0BB3BA] h-[200px] pr-3">
                              {card.rules.map((rule, ruleIndex) => (
                                <li key={ruleIndex} className='text-[#0BB3BA]'>{rule}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>  
                    <div className='self-end'>
                      <button
                        className="w-full font-semibold justify-self-end self-end mt-auto text-black hover:text-white hover:cursor-pointer rounded-xl py-1 bg-[#FFF89A] hover:bg-[#0BB3BA] duration-500"
                        onClick={() => setViewRules(!viewRules)}
                      >
                        {viewRules ? (
                          <span>View Description</span>
                        ) : (
                          <span>View Rules</span>
                        )}
                      </button>
                    </div>              
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

