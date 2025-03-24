// Import the react library
import React from 'react'; 
// Import the google maps library for a react app
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

// Define the type for the center property
interface Center {
    lat: number; // Latitude and Longitude are number types
    lng: number;
}

// Define the type for the component props
interface MapProps {
    center: Center;
    zoom: number; // Zoom is a number type
}

// The map component
// A functional component that takes two properties:
//  @center: for the latitude and longitude of the map
//  @zoom: for the zoom level of the map
const Map = ({ center, zoom } : MapProps) => {
    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    return (
        // Loadscript loads the Google Maps JavaScript API
        // MarkerF places a marker on the map
        <LoadScript googleMapsApiKey = {"AIzaSyCSvZmGKlv9reCpsacvBhxhOrN7eMzOGCA"}>
            <GoogleMap // Renders the actual map
                mapContainerStyle={containerStyle} // Dimensions of the map
                center={center}
                zoom={zoom}
                >   
                    <MarkerF position={center} /> 
                </GoogleMap>
        </LoadScript>
    );
};

// We export the component 
export default Map;