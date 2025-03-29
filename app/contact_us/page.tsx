"use client";
import * as React from 'react';
import { Header } from '../components/Header';
import { useRouter } from 'next/navigation';

export default function ContactUsPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
                {/* Basic Background*/}
                <main className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-20">
                        {/* Header */}
                        <div className="w-full max-w-4xl text-center">
                        <button
                            className="mt-[-10px] ml-[8px] text-base text-black hover:text-lime-800 transition-colors"
                            onClick={() => router.back()}
                        >
                            Back
                        </button>
                            <h1 className="nothing-you-could-do-regular text-6xl font-bold tracking-tighter text-black mb-4"></h1>
                            <div className="w-full h-0.5 bg-black/20 shadow-sm" />
                            {/* Basic Text */}
                            <p className="text-black">
                                Can't find your restaurant?
                                CONTACT US!
                            </p>

                            {/* Email Button */}
                            <a className="mt-20 px-12 py-3 text-lg font-semibold text-white bg-black rounded-full transition-all duration-300 hover:bg-gray-500 hover:-translate-y-1 hover:shadow-xl"
                             href="mailto:ratemyrestaurantdavis@gmail.com"
                             style={{ position: 'absolute', 
                                top: '50%',
                                left: '45%',
                                padding: '10px 20px'
                              }}>Email</a>
                    </div>
            </main>
        </div>
    )
}
