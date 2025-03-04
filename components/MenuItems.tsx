import * as React from "react";
import { MenuItemProps } from "../types";

export const MenuItem: React.FC<MenuItemProps> = ({ image, title, price, calories }) => {
  return (
    <div className="overflow-hidden w-full rounded-3xl border-2 border-black border-solid bg-neutral-700">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 justify-between text-xl font-semibold leading-tight max-md:mt-10">
            <img
              loading="lazy"
              src={image}
              alt={title}
              className="object-contain shrink-0 max-w-full rounded-3xl aspect-[0.96] w-[153px]"
            />
            <div className="flex flex-col items-start my-auto">
              <div className="self-stretch text-zinc-100">{title}</div>
              <div className="overflow-hidden px-4 py-2.5 mt-2.5 w-32 max-w-full text-base text-black bg-white rounded-3xl border-2 border-solid border-black border-opacity-10 max-md:pr-5">
                cal: {calories}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
          <div className="mt-6 text-xl font-semibold leading-tight text-yellow-300 max-md:mt-10">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};