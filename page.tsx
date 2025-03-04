import * as React from 'react';
import { NavButton } from './components/NavButton';
import { RestaurantList } from './components/RestaurantList';

export default function RestaurantPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header with centered navigation */}
      <header className="w-full flex justify-center py-4">
        <nav className="flex gap-8 items-center"> {/* Increased gap for better spacing */}
          <button className="text-base text-black hover:text-lime-800 transition-colors">
            Profile
          </button>
          <button className="ml-10 text-base text-black hover:text-lime-800 transition-colors">
            Most Popular
          </button>
          <button className="ml-10 text-base text-black hover:text-lime-800 transition-colors">
            Search
          </button>
        </nav>
      </header>
      
      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 lg:px-20">
        {/* Centered title section */}
        <div className="w-full max-w-4xl text-center py-14">
        <h1 className="nothing-you-could-do-regular text-6xl font-bold tracking-tighter text-black mb-4">
  RateMyRestaurant
</h1>
          <div className="w-full h-0.5 bg-black/20 shadow-sm" />
        </div>

        {/* Restaurant list */}
        <section className="w-full max-w-6xl mt-1">
          <RestaurantList />
        </section>
      </main>
    </div>
  );
}