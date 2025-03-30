import React, { useState } from "react";

import {FaSearch} from "react-icons/fa"; // Import for the icon

export const SearchBar = () => {
    {/* Hover Mechanism */}
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const fetchData = (value) => {
        fetch("/data/restaurantData.txt") {
            .then((response))
        }
    }

    return (
    <div 
        className="background-color-white width-100% border-radius:10px height-2.5rem padding-0 15px box-shadow: 0px 0px 8px #ddd display-flex align-items"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            position: 'relative',
            top: '10px'
        }}
    >
        {/* Search Bar Icon */}
        <FaSearch id="search-icon" 
        style={{
            color: 'black',
            position: 'absolute',
            left: '32%',
            top: '6px'
        }}/>

        {/* Search bar */}
        <input placeholder="Type to search..." 
        style={{
            border: isHovered ? '2px solid gray' : '2px solid black',
            borderRadius: '10px',
            color: 'black',
        }} />
    </div>
    )
};