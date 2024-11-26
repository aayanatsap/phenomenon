"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import logo from "../../media/logo.png";

export function Institutional() {
  return (
    <CardContainer className="inter-var text-center">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border text-center flex flex-col items-center">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-neutral-600 dark:text-white mx-auto"
        >
          INSTITUTIONAL
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
        >
          <div className="flex flex-col justify-center items-center my-8">
            <span className="mr-2 text-5xl font-extrabold">₹1350</span>
            <span className="text-gray-500 dark:text-gray-400">/per-person</span>
          </div>

          <ul role="list" className="space-y-1 mb-12 text-center">
            <li className="list-disc">
              <span>Eligible for Best Delegation</span>
            </li>
            <li className="list-disc">
              <span>Minimum 8 Members</span>
            </li>
            <li className="list-disc">
              <span>Maximum 40 Members</span>
            </li>
          </ul>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <Image
            src={logo}
            height="800"
            width="800"
            className="h-72 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="justify-between items-center mt-20 w-full inline-block">
        <Link href="/registration/delegation/"><CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-[80%] mx-auto"
          >
            REGISTER NOW!
          </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
