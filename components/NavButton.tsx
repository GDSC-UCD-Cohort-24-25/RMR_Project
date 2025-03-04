import * as React from 'react';
import { NavButtonProps } from '../types';

export const NavButton: React.FC<NavButtonProps> = ({ label, variant = 'default', className = '' }) => {
  const baseStyles = "overflow-hidden px-3 py-2.5 text-base font-semibold leading-tight text-center whitespace-nowrap rounded-3xl";
  const variantStyles = variant === 'filled' 
    ? "text-white bg-stone-900" 
    : "text-black bg-white border border-solid border-stone-300";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`}>
      {label}
    </button>
  );
};