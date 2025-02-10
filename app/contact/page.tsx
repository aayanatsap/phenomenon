"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="w-full flex justify-center mb-14 px-5">
        <span className="text-babyblue md:text-5xl text-4xl font-semibold text-center font-aquireBold">Get in touch with us</span>
      </div>
      <div className="py-0 flex flex-wrap gap-20 items-center justify-center bg-transparent dark:bg-transparent w-full mx-auto px-8 mb-60">
        <Card title={<>
          <div className="text-whitepink">
            <h4 className="text-lightblue mb-1 text-3xl font-bold text-dark text-center items-center justify-center py-4 font-aquireBold">
              Coordinator Contacts
            </h4>
            <p className="md:text-lg text-base text-center font-aquire font-normal">
              <span className="text-midgray font-bold">Teacher Coordinators :</span>
              <br />
              <a href="mailto:robin.colaco@gmail.com" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Mr Robin Colaco : robin.colaco@gmail.com</a> <br></br>
              <a href="mailto:hemavathy72@gmail.com" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Ms Hemavathy P : hemavathy72@gmail.com</a><br></br>
              <a href="mailto:bindut23@yahoo.in" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Ms Bindu Thomas : bindut23@yahoo.in</a><br></br>
              <a href="mailto:elizabethsebastian028@gmail.com" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Ms Elizabeth Sebastian : elizabethsebastian028@gmail.com</a><br></br>
              <br></br>
              <span className="text-midgray font-bold">Student Coordinators :</span>
              <br></br> 
              <a href="tel:+919686303913" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Sugandha Gupta : +91 9686303913</a> <br></br>
              <a href="tel:+919986030607" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Yug Nagori : +91 9986030607</a> <br></br>
            </p>
          </div></>} icon={""}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-darkGalaxy"
            colors={[
              [336, 172, 153],
              [332, 101, 149],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title={<>
          <div className="text-whitepink">
            <h4 className="text-lightblue  mb-1 text-3xl text-dark text-center items-center justify-center py-4 font-aquireBold">
              Contact Numbers
            </h4>
            <p className="md:text-lg text-base text-center font-normal font-aquire">
              <span className="text-midgray font-bold">Head of Events :</span>
              <br />
              <a href="tel:+919632223034" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Ashrith Puppala : +91 9632223034</a> <br></br>
              <a href="tel:+918277265341" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Daksh R : +91 8277265341</a> <br></br>
              <a href="tel:+916360964174" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Felicia Andrew : +91 6360964174</a><br></br>
              <br />
              <span className="text-midgray font-bold">Head of Registrations :</span>
              <br></br> 
              <a href="tel:+918217590592" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Om Agarwal : +91 8217590592</a> <br></br>
              <a href="tel:+919353615399" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">Dia Jain : +91 9353615399</a> <br></br>
              <br></br>
              <span className="text-midgray font-bold">IT & Technology Head :</span>
              <br></br> 
              <a href="tel:+919740521910" className="hover:text-lightblue duration-500 font-trench font-bold" target="_blank">T Roshan Pramod : +91 9740521910</a> <br></br>
            </p>
          </div></>} icon={""}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-darkGalaxy"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title={<>
          <div>
            <h4 className="text-lightblue mb-1 text-3xl font-bold text-dark text-center items-center py-4 justify-center font-aquireBold">
              Our Location
            </h4>
            <a href="https://maps.app.goo.gl/B9gsKWkNANzHkZVc9" target="_blank" className="md:text-xl text-lg hover:text-lightblue duration-500 text-body-color flex font-trench font-bold">
              <p className="text-center">
                27, Museum Rd, Shanthala Nagar, Ashok Nagar, Bengaluru,
                Karnataka 560025{" "}
              </p>
            </a>
          </div></>} icon={""}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-darkGalaxy"
            colors={[
              [36, 172, 183],
              [32, 31, 349],
            ]}
            dotSize={2}
          />
        </Card>
        <Card title={<>
            <div>
              <h4 className="text-lightblue mb-1 text-3xl font-bold text-dark text-center items-center justify-center py-4 font-aquireBold">
                Official Email
              </h4>
              <p className="text-base text-body-color text-center">
                <a href="mailto:phenomenon@sjbhs.edu.in" className="md:text-xl text-lg hover:text-lightblue duration-500 font-trench font-bold">phenomenon@sjbhs.edu.in</a> <br></br>
              </p>
            </div></>} icon={""}>
            <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-darkGalaxy"
            colors={[
              [236, 172, 153],
              [232, 21, 149],
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: any;
  icon: any;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(!hovered)}
        className="border group/canvas-card flex items-center justify-center border-whitepink  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3  text-whitepink" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3  text-whitepink" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-whitepink" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-whitepink" />

        <AnimatePresence> 
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20 grid items-center justify-items-center">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-100 relative z-10 text-white mt-4  font-bold  group-hover/canvas-card:scale-105 scale-95 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
