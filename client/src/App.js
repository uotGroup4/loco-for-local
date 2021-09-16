import './App.css';
import React from 'react';
import * as parksData from "./data/skateboard-parks.json"

// google react api libraries
import {
  GoogleMap,
  useLoadScript,
  Marker,
// InfoWindow,
} from '@react-google-maps/api';

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng, } 
//   from 'use-places-autocomplete';

  // styling for the map
import mapStyles from './mapStyles';

// set up options to pass to the googlemaps component (to avoid rerendering)
const libraries = ['places'];
const mapContainerStyle = {
  width: "50%",
  height: "50%"
};

// lat/lng for ottawa, toronto is lat: 43.6532, lng:-79.3831
const center = {
  lat: 45.4247,
  lng:-75.6950
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
}
/////////////////////////////////////////////

function App() {
  // use loadscript hook to setup load script/communicate with google api
  const {loadError, isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if(loadError) return "Errror loading map";
  if(!isLoaded) return "Loading Maps";

  return (
    <div className="container">
      <GoogleMap
        mapContainerStyle ={mapContainerStyle}
        zoom = {10}
        center = {center}
        options = {options}
      >
        {/* embbed markers inside maps component */}
        {parksData.features.map((park) => (
          <Marker 
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0]
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default App;
