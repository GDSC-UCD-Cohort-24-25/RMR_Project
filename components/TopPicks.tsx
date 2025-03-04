import * as React from "react";
import { MenuItem } from "./MenuItems";
import { TopPicksProps } from "../types";

export const TopPicks: React.FC<TopPicksProps> = ({ items }) => {
  return (
    <div className="flex flex-col max-md:max-w-full">
      <div className="self-start text-4xl leading-tight text-right text-black">
        Top Picks
      </div>
      <div className="flex flex-col gap-6 mt-11 max-md:mt-10 max-md:max-w-full">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};