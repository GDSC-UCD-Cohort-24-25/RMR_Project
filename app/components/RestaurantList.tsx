'use client';
import Link from 'next/link';
import { RestaurantCard } from './RestaurantCard';
import { restaurants } from '../data/restaurantData';
import { RestaurantCardProps } from '../types';
import * as React from "react";
import { useRouter } from 'next/navigation';

export const RestaurantList: React.FC = () => {
  const router = useRouter();
  // Get only the first 9 restaurants
  const firstNineRestaurants = restaurants.slice(0, 9);

  const handleNextPage = () => {
    router.push('/page2');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-x-5 gap-y-16 max-md:grid-cols-1">
        {firstNineRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
      {restaurants.length > 9 && (
        <button 
          onClick={handleNextPage}
          className="mt-20 px-12 py-3 text-lg font-semibold text-white bg-black rounded-full transition-all duration-300 hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl"
        >
          Next
        </button>
      )}
    </div>
  );
};