import Link from 'next/link';
import * as React from "react";

interface MenuItemProps {
  image: string;
  title: string;
  price: string;
  calories: string;
}

// Update RestaurantCardProps to include menuItems
export interface RestaurantCardProps {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  menuAvailable: boolean;
  imageUrl: string;
  menuItems?: MenuItemProps[]; // Optional menu items for the restaurant
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id, // Ensure the id prop is passed
  name,
  category,
  address,
  rating,
  menuAvailable,
  imageUrl,
}) => {
  return (
    <Link href={`/restaurant/${id}`}> {/* Corrected href */}
      <div className="flex overflow-hidden flex-col pb-7 w-full rounded-3xl border-2 border-black border-solid bg-neutral-700 cursor-pointer transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.6)]">
        <div className="w-full h-[280px] overflow-hidden rounded-3xl">
          {imageUrl && (
            <img
              loading="lazy"
              src={imageUrl}
              alt={`${name} restaurant exterior`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col px-6 mt-4 w-full max-md:px-5">
          <div className="flex gap-10 text-xl font-semibold leading-tight">
            <div className="flex flex-col flex-1 min-w-0">
              <div className="text-white truncate">{name}</div>
              <div className="text-yellow-200 text-sm mt-1 truncate">{category}</div>
              {menuAvailable && (
                <div className="self-start mt-1 text-purple-200 text-opacity-70">Menu</div>
              )}
            </div>
            <div className="self-start text-purple-200 text-opacity-70 shrink-0">
              Rating: {Number(rating).toFixed(1)}
            </div>
          </div>
          <div className="self-start mt-4 text-base text-white truncate">
            {address}
          </div>
        </div>
      </div>
    </Link>
  );
};