"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { TopPicks } from "./TopPicks";
import { RestaurantCardProps } from "../components/RestaurantCard";
import { useRouter } from 'next/navigation';
import { Header } from "./Header";    

interface RestaurantDetailsProps {
  restaurant: RestaurantCardProps;
}

export const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ restaurant }) => {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState<number | undefined>(undefined);

  // Get the height of the Top Picks section
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.clientHeight);
    }
  }, [restaurant.menuItems]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <button
        className="mt-5 ml-[8px] text-base text-black hover:text-lime-800 transition-colors"
        onClick={() => router.push('/')}
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

      {/* Display menu items */}
      <div className="flex flex-wrap gap-2 justify-between self-center mt-1 ml-1 w-full max-w-[1296px] max-md:max-w-full">
        {/* Menu items with smaller or larger width and added shadow */}
        <div ref={menuRef} className="w-full md:w-3/5 lg:w-2/5 filter drop-shadow-lg"> 
          <TopPicks items={restaurant.menuItems || []} />
        </div>
      </div>
    </div>
  );
};
