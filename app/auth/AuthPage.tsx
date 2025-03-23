"use client";
import * as React from "react";
import { useRouter } from 'next/navigation';
import { SignInForm } from "./SignInForm";

export const AuthPage: React.FC = () => {
  const router = useRouter();
  
  const handleSignIn = (email: string, password: string) => {
    // Add actual authentication logic here
    console.log('Signing in with:', email, password);
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center pt-5 pb-10 bg-white">
      <SignInForm onSubmit={handleSignIn} />
    </div>
  );
};