"use client";
import * as React from "react";
import { TopPicks } from "./TopPicks";
import { RestaurantCardProps } from "../components/RestaurantCard";
import { useRouter } from 'next/navigation';
import { Header } from "./Header";      

interface RestaurantDetailsProps {
  restaurant: RestaurantCardProps;
}

export const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ restaurant }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <button
        className="mt-[-20px] ml-[8px] text-base text-black hover:text-lime-800 transition-colors"
        onClick={() => router.back()}
      >
        Back
      </button>

      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-20">
        {/* Centered title section with dynamic restaurant name */}
        <div className="w-full max-w-4xl text-center py-14">
          <h1 className="nothing-you-could-do-regular text-6xl font-bold tracking-tighter text-black mb-4">
            {restaurant.name}
          </h1>
          <div className="w-full h-0.5 bg-black/20 shadow-sm" />
        </div>
      </main>

      {/* Display dynamic menu items if available */}
      <div className="flex flex-wrap gap-2 justify-between self-center mt-1 ml-1 w-full max-w-[1296px] max-md:max-w-full">
        <TopPicks items={restaurant.menuItems || []} />
        <aside className="flex overflow-hidden flex-col self-end pt-3.5 mt-9 text-xl leading-tight text-black whitespace-nowrap rounded-3xl border-2 border-black border-solid bg-stone-950 max-md:max-w-full">
          <div className="overflow-hidden self-center px-14 py-2 max-w-full bg-white rounded-3xl border-2 border-solid border-zinc-400 border-opacity-0 w-[183px] max-md:px-5">
            Reviews
          </div>
          <div className="flex shrink-0 mt-2 rounded-3xl border-2 border-black border-solid bg-neutral-700 h-[470px] w-[500px] max-md:w-full" />
        </aside>
      </div>
    </div>
  );
};
