import React, { useEffect, useState } from 'react';
import Modal from "./Modal/Modal";

// integrate apollo hooks in homepage
import { useQuery } from '@apollo/client';
import { QUERY_VENDORS } from '../utils/queries';

// google react api libraries
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

// styling for the map
import mapStyles from '../mapStyles';

// set up options to pass to the googlemaps component (to avoid rerendering)
const libraries = ['places'];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
};

// lat/lng for ottawa, toronto is lat: 43.6532, lng:-79.3831
const center = {
    lat: 43.6532,
    lng: -79.3831
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const Search = () => {
    // use loadscript hook to setup load script/communicate with google api
    const { loadError, isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [selected, setSelected] = React.useState(null)
    console.log(selected);
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_VENDORS);

    //for the modal set show
    const [show, setShow] = useState(false);

    // get vendor data out of query's response
    const vendors = data?.vendors || [];

    // these if's need to be last they load the map
    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading Maps";

    return (
        <section>
            <div className="center" id="search">
                <h1 className="page-header">Loco for local</h1>
            </div>
            <div className="center">
            </div>
            <div>
                <div className="map-container">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={10}
                        center={center}
                        options={options}
                        onClick={(event) => {
                            console.log(event)
                        }}
                    >
                        {/* embbed markers inside maps component */}
                        {vendors.map((vendor) => (
                            <Marker
                                key={vendor._id}
                                position={{ lat: parseFloat(vendor.coordinates[1]), lng: parseFloat(vendor.coordinates[0]) }}
                                icon={{
                                    url: 'lfl_favicon.png',
                                    scaledSize: { height: 30, width: 30 }
                                }}
                                onClick={() => {
                                    setSelected(vendor);
                                }}
                            />
                        ))}
                        {selected ? (<InfoWindow position={{ lat: parseFloat(selected.coordinates[1]), lng: parseFloat(selected.coordinates[0]) }} onCloseClick={() => {
                            setSelected(null)
                        }}>
                            <div className="App">
                                <button onClick={() => setShow(true)}>Show Modal</button>
                                <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                                    <p>Modal body content</p>
                                </Modal>
                            </div>
                        </InfoWindow>
                        ) : null}
                    </GoogleMap>
                </div>
                <p>
                    Add a brief description of how to search with a h1
                </p>
            </div>
        </section>
    );
}

export default Search;