import Link from 'next/link';
import { RestaurantCard } from './RestaurantCard';
import { restaurants } from '../data/restaurantData';
import { RestaurantCardProps } from '../types';
import * as React from "react";

export const RestaurantList: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
    </div>
  );
};