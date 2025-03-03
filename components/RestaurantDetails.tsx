// components/RestaurantDetails.tsx
import * as React from "react";
import { MenuItem } from "./MenuItems"; // Import the MenuItems component
import { RestaurantCardProps, MenuItemProps } from "../types";

interface RestaurantDetailsProps {
  restaurant: RestaurantCardProps;
  menuItems: MenuItemProps[]; // Add menuItems prop
}

export const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  restaurant,
  menuItems,
}) => {
  return (
    <div className="flex overflow-hidden flex-col pt-5 pb-36 bg-white max-md:pb-24">
      <header className="flex flex-wrap gap-5 justify-between ml-3.5 w-full max-w-[1330px] max-md:max-w-full">
        {/* Header content */}
      </header>
      <main className="flex overflow-hidden flex-col items-center px-20 pt-11 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1252px] max-md:max-w-full">
          <div className="flex flex-wrap gap-9 max-md:max-w-full">
            <h1 className="flex-auto self-start mt-3.5 text-6xl tracking-tighter leading-tight text-black max-md:text-4xl">
              {restaurant.name}
            </h1>
            <div className="overflow-hidden grow px-6 py-7 text-3xl font-bold leading-tight text-white rounded-3xl border-2 border-black border-solid bg-neutral-700 w-fit max-md:px-5">
              Rating: {restaurant.rating}
            </div>
          </div>
          <button className="overflow-hidden self-end px-6 pt-2 pb-6 mt-8 text-3xl leading-tight text-white whitespace-nowrap rounded-3xl border-2 border-solid bg-stone-400 border-black border-opacity-10 max-md:px-5">
            Favorite
          </button>
        </div>
        <div className="shrink-0 mt-4 max-w-full h-0 border-2 border-black border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[1248px]" />
      </main>

      {/* Render Menu Items */}
      <div className="flex flex-col gap-5 px-20 mt-10">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            calories={item.calories}
          />
        ))}
      </div>

      <aside className="flex overflow-hidden flex-col self-end pt-3.5 mt-9 text-xl leading-tight text-black whitespace-nowrap rounded-3xl border-2 border-black border-solid bg-stone-950 max-md:max-w-full">
        <div className="overflow-hidden self-center px-14 py-2 max-w-full bg-white rounded-3xl border-2 border-solid border-zinc-400 border-opacity-0 w-[183px] max-md:px-5">
          Reviews
        </div>
        <div className="flex shrink-0 mt-2 rounded-3xl border-2 border-black border-solid bg-neutral-700 h-[516px] max-md:max-w-full" />
      </aside>
    </div>
  );
};