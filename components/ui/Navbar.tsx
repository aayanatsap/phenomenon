"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "ARTIST",
      link: "/artist",
    },
    {
      name: "EVENTS",
      link: "/events",
    },
    {
      name: "RULES",
      link: "/rules",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
