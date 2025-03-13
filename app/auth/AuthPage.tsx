"use client";
import * as React from "react";
import { useRouter } from 'next/navigation';

import { NavLink } from "../auth/NavLink";
import { SignInForm } from "../auth/SignInForm";

export const AuthPage: React.FC = () => {
  const router = useRouter();
  
  const handleSignIn = (email: string, password: string) => {
    // Add actual authentication logic here
    console.log('Signing in with:', email, password);
    router.push('/');
  };

  const navLinks = [
    { text: "Most Popular", isButton: false, path: "/popular" },
    { text: "Profile", isButton: false, path: "/profile" },
    { text: "Sign-in", isButton: true, path: "/signin" }
  ];

  return (
    <div className="flex overflow-hidden flex-col pt-5 pr-20 pb-64 pl-3.5 bg-white max-md:pr-5 max-md:pb-24">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
    
        <nav className="flex gap-10 items-center my-auto text-base leading-tight text-center text-black">
          {navLinks.map((link, index) => (
            <NavLink 
              key={index} 
              {...link}
              onClick={() => router.push(link.path)}
            />
          ))}
        </nav>
      </div>
      <SignInForm onSubmit={handleSignIn} />
    </div>
  );
};