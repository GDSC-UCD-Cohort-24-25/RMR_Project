'use client';
import * as React from 'react';
import { Header } from '../components/Header';
import { restaurants } from '../data/restaurantData';
import { RestaurantCard } from '../components/RestaurantCard';
import Link from 'next/link';

export default function Page2() {
  // Get restaurants 9-17 (the next 9 restaurants)
  const nextNineRestaurants = restaurants.slice(9, 18);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-20">
        <div className="w-full max-w-4xl text-center py-14">
          <h1 className="nothing-you-could-do-regular text-6xl font-bold tracking-tighter text-black mb-4">
            RateMyRestaurant
          </h1>
          <div className="w-full h-0.5 bg-black/20 shadow-sm" />
        </div>

        <section className="w-full max-w-6xl mt-1">
          <div className="grid grid-cols-3 gap-x-5 gap-y-16 max-md:grid-cols-1">
            {nextNineRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
          <div className="flex justify-center mt-16 gap-4">
            <Link href="/">
              <button className="px-12 py-3 text-lg font-semibold text-white bg-black rounded-full transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl">
                Back
              </button>
            </Link>
            {restaurants.length > 18 && (
              <Link href="/page3">
                <button className="px-12 py-3 text-lg font-semibold text-white bg-black rounded-full transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl">
                  Next
                </button>
              </Link>
            )}
          </div>
        </section>
      </main>
    </div>
  );
} 