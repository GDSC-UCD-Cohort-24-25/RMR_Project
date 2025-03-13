"use client";
import * as React from "react";
import { useRouter } from 'next/navigation';
import { NavLink } from "../auth/NavLink";

export const Header: React.FC = () => {
  const router = useRouter();

  const navLinks = [
    { text: "Profile", isButton: false, path: "/profile" },
    { text: "Most Popular", isButton: false, path: "/popular"},
    { text: "Sign-in", isButton: true, path: "/signin" }
  ];

  return (
    <header className="flex overflow-hidden flex-col pt-5 pb-5 bg-white">
      <div className="flex flex-wrap gap-5 justify-center w-full max-md:max-w-full">
        <nav className="flex gap-8 items-center text-base leading-tight text-center text-black">
          {navLinks.map((link, index) => (
            <NavLink 
              key={index} 
              {...link}
              onClick={() => router.push(link.path)}
              className={`${index === 1 ? "ml-10" : ""} ${index === 0 ? "ml-[40px]" : ""}`}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};
