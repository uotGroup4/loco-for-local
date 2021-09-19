import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import React from 'react';
import * as parksData from "./data/skateboard-parks.json"

import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink 
} from '@apollo/react-hooks';

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
  width: "100vw",
  height: "100vh"
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

// we need to establish the connection to the back-end server's /graphql endpoint. establish a new link to the GraphQL server at its /graphql endpoint with createHttpLink()
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

// instantiate a new cache object using new InMemoryCache()
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  // use loadscript hook to setup load script/communicate with google api
  const {loadError, isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if(loadError) return "Errror loading map";
  if(!isLoaded) return "Loading Maps";

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
