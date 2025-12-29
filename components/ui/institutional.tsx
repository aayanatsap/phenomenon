"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import logo from "../../media/logo.png";

export function Institutional() {
  return (
    <CardContainer className="inter-var text-center">
      <CardBody className="bg-lightblue relative  dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl px-6 py-12 border text-center flex flex-col items-center">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-whitepink dark:text-white mx-auto font-aquireBold"
        >
          INSTITUTIONAL
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-whitepink text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
        >
          <>
            <div className="flex flex-col justify-center items-center my-4">
              <span className="text-4xl font-aquire text-babyblue">Rs.300 per person</span>
            </div>

            <ul role="list" className="mb-10 space-y-2 text-center font-trench text-xl font-extrabold">
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
          </>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-0 bg-opacity-0">
          <Image
            src={logo}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl "
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="60" className="justify-center items-center mt-12 w-full inline-block">
          <CardItem
            translateZ={20}
            as="button"
            className="font-aquireBold px-4 py-2 rounded-xl bg-gray-500 dark:bg-gray-600 text-gray-300 text-sm font-bold w-[80%] mx-auto cursor-not-allowed opacity-60"
            disabled
          >
            REGISTRATIONS CLOSED
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
