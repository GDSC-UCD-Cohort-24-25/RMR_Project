'use client';
import * as React from 'react';
import { NavButton } from './components/NavButton';
import { RestaurantList } from './components/RestaurantList';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';


export default function RestaurantPage() {
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
        {/* Search Bar */}
        <SearchBar style={{
          position: 'relative'
        }}/>

        {/* Restaurant list */}
        <section className="w-full max-w-6xl mt-1">
          <RestaurantList />  
        </section>
      </main>
    </div>
  );
}
      
      
   
