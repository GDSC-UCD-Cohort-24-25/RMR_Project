"use client"; // Required for client-side interactions
import React, { useState } from "react";
import { AuthPage } from "../auth/AuthPage";
import { Header } from '../components/Header';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col items-center">
      <button
        className="mt-[-10px] ml-[8px] text-base text-black hover:text-lime-800 transition-colors"
        onClick={() => router.back()}
      >
        Back
      </button>
        
        <div className="w-full max-w-md mt-8 p-10 bg-white rounded-lg shadow-md border border-gray-200">
          {/* Logo placeholder - replace with your actual logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">Logo</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-normal text-center text-gray-800 mb-2">Sign in</h1>
          
          
          {/* Input fields for email and password */}
          <div className="mb-8">
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black"
                required
              />
            </div>
            <button
              className="w-40 mx-auto bg-blue-500 text-white py-1.5 px-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors block"
              onClick={() => console.log('Sign in with:', email, password)}
            >
              Sign In
            </button>
          </div>
          
          {/* Divider with "or" text */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Social login options */}
          <div className="space-y-2">
            <button className="w-full py-1.5 px-3 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors text-black text-sm">
              <span>Google</span>
            </button>
            <button className="w-full py-1.5 px-3 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors text-black text-sm">
              <span>Facebook</span>
            </button>
            <button className="w-full py-1.5 px-3 border border-gray-300 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors text-black text-sm">
              <span>LinkedIn</span>
            </button>
          </div>
          
          <div className="mt-6 flex justify-between text-sm">
            <button 
              onClick={() => router.push('/signup')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Create account
            </button>
            <button 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}