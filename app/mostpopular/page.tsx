"use client";
import React from "react";
import { Header } from '../components/Header';
import { useRouter } from 'next/navigation';

export default function MostPopularPage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto text-center py-14">
          <h1 className="nothing-you-could-do-regular text-6xl font-bold tracking-tighter text-black mb-4">
            Most Popular
          </h1>
          <div className="w-full h-0.5 bg-black/20 shadow-sm mb-10" />
        </div>
        
        {/* Popular restaurants section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample restaurant cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg border-2 border-black shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Restaurant {item}</h3>
                  <p className="text-gray-600">Popular for their signature dishes and excellent service</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="ml-2 text-sm text-gray-600">4.5</span>
                    </div>
                    <button 
                      onClick={() => console.log(`View Restaurant ${item}`)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
            onClick={() => router.push('/')}
          >
            Back
          </button>
        </div>
      </main>
    </div>
  );
}