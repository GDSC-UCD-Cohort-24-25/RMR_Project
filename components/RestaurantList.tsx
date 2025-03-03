import Link from 'next/link';
import { RestaurantCard } from './RestaurantCard';
import { restaurants } from '../data/restaurantData';
import { RestaurantCardProps } from '../types';

export const RestaurantList: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {restaurants.map((restaurant: RestaurantCardProps) => (
        <div key={restaurant.name} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <RestaurantCard {...restaurant} />
        </div>
      ))}
    </div>
  );
};