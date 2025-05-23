"use client";
import * as React from "react";
import { useRouter } from 'next/navigation';
import { NavLink } from "../auth/NavLink";

export const Header: React.FC = () => {
  const router = useRouter();

  const navLinks = [
    { text: "Profile", isButton: false, path: "/profile" },
    { text: "Most Popular", isButton: false, path: "/mostpopular"}, // This should match the folder name
    { text: "Sign-in", isButton: false, path: "/signin" },
    { text: "Contact Us", isButton: false, path: "/contact_us"}
  ];

  return (
    <header className="flex overflow-hidden flex-col pt-20 pb-5 bg-white">
      <div className="flex flex-wrap gap-5 justify-center w-full max-md:max-w-full">
        <nav className="flex gap-12 items-center text-base leading-tight text-center text-black">
          {navLinks.map((link, index) => (
            <NavLink 
              key={index} 
              {...link}
              onClick={() => router.push(link.path)}
              className="hover:text-lime-800 transition-colors"
            />
          ))}
        </nav>
      </div>
    </header>
  );
};
