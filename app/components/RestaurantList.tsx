'use client';
import Link from 'next/link';
import { RestaurantCard } from './RestaurantCard';
import { restaurants } from '../data/restaurantData';
import * as React from "react";

interface RestaurantListProps {
  selectedCategories?: string[];
}

export const RestaurantList: React.FC<RestaurantListProps> = ({ selectedCategories = [] }) => {
  const [visibleRestaurants, setVisibleRestaurants] = React.useState(6);
  const restaurantsPerLoad = 6;

  // Filter restaurants based on selected categories
  const filteredRestaurants = React.useMemo(() => {
    if (selectedCategories.length === 0) {
      return restaurants;
    }
    return restaurants.filter(restaurant => 
      selectedCategories.includes(restaurant.type)
    );
  }, [selectedCategories]);

  const handleShowMore = () => {
    setVisibleRestaurants(prev => Math.min(prev + restaurantsPerLoad, filteredRestaurants.length));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const currentRestaurants = filteredRestaurants.slice(0, visibleRestaurants);
  const hasMoreRestaurants = visibleRestaurants < filteredRestaurants.length;

  return (
    <div className="flex flex-col items-center pb-8">
      <div className="grid grid-cols-3 gap-x-5 gap-y-16 max-md:grid-cols-1 w-full">
        {currentRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="w-full">
            <RestaurantCard 
              id={restaurant.id}
              name={restaurant.name}
              category={restaurant.type}
              address={restaurant.address}
              rating={restaurant.rating}
              menuAvailable={restaurant.menuAvailable}
              imageUrl={restaurant.imageUrl}
            />
          </div>
        ))}
      </div>
      {hasMoreRestaurants && (
        <div className="mt-12 mb-12">
          <button 
            onClick={handleShowMore}
            className="flex flex-col items-center px-12 py-3 text-lg font-semibold text-purple-200 text-opacity-70 bg-neutral-700 rounded-3xl border-2 border-black border-solid transition-all duration-300 hover:bg-neutral-600 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)]"
          >
            Show More
            <span className="text-sm mt-1">
              Showing {visibleRestaurants - restaurantsPerLoad + 1}-{visibleRestaurants} of {filteredRestaurants.length}
            </span>
          </button>
        </div>
      )}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center text-purple-200 text-opacity-70 bg-neutral-700 rounded-full border-2 border-black border-solid transition-all duration-300 hover:bg-neutral-600 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)]"
          aria-label="Back to top"
        >
          <span className="text-lg font-semibold text-yellow-200">↑</span>
        </button>
        <button
          onClick={scrollToBottom}
          className="w-12 h-12 flex items-center justify-center text-purple-200 text-opacity-70 bg-neutral-700 rounded-full border-2 border-black border-solid transition-all duration-300 hover:bg-neutral-600 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)]"
          aria-label="Go to bottom"
        >
          <span className="text-lg font-semibold text-yellow-200">↓</span>
        </button>
      </div>
    </div>
  );
};