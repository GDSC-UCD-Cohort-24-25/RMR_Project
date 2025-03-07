import * as React from "react";
import { NavLinkProps } from "../types";

export const NavLink: React.FC<NavLinkProps> = ({ 
  text, 
  isButton,
  onClick,
  className = "" 
}) => {
  return (
    <button 
      className={`self-stretch my-auto focus:outline-none ${
        isButton 
          ? "overflow-hidden px-9 py-3.5 font-regular text-black"
          : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};