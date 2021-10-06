import React, { useState } from 'react';
import Modal from '../components/Modal/Modal'
import VendorList from '../components/VendorList';

// import Auth from '../utils/auth';

// integrate apollo hooks in homepage
import { useQuery } from '@apollo/client';
import { QUERY_VENDORS } from '../utils/queries';

// google react api libraries
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from '@react-google-maps/api';

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
}
    from 'use-places-autocomplete';

// REACH Combobox styles
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css"

// styling for the map
import mapStyles from '../mapStyles';

require("dotenv").config();

// set up options to pass to the googlemaps component (to avoid rerendering)
const libraries = ['places'];
const mapContainerStyle = {
    width: "auto",
    height: "600px",
};

// lat/lng for toronto
const center = {
    lat: 43.6532,
    lng: -79.3831
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

const Home = () => {
    // use loadscript hook to setup load script/communicate with google api
    const { loadError, isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    // useState to get the state of the selected marker
    const [selected, setSelected] = React.useState(null)

    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_VENDORS);
    console.log(data)

    //for the modal set show
    const [openModal, setOpenModal] = useState(false);

    // get vendor data out of query's response
    const vendors = data?.vendors || [];
    console.log(vendors)

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    // these if's need to be last they load the map
    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading Maps";

    return (
        <section className="home-container">
            <div className='map-container'>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={5}
                    center={center}
                    options={options}
                    onLoad={onMapLoad}
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
                                setOpenModal(true);
                            }}
                        />
                    ))}
                    < Locate panTo={panTo} />
                </GoogleMap>

            </div>
            {openModal && <Modal vendor={selected} closeModal={setOpenModal} />}

            {/* Testing out vendor list */}
            <div className="vendor-cards">
                <Search panTo={panTo} />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <VendorList vendors={vendors} title="Vendor List" />
                )}
            </div>
        </section>
    );
}

function Locate({ panTo }) {
    return (
        <button className="locate" onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.coords.latitude, lng: position.coords.longitude
                    });
                },
                () => null
            );
        }}>
            <img src='compass.svg' alt="compass - locate me" />
        </button>
    )
}

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3831 },
            radius: 20000,
        },
    });

    return (
        <div className='search'>
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();
                    // console.log(address)
                    try {
                        const results = await getGeocode({ address });
                        // console.log(results)
                        const { lat, lng } = await getLatLng(results[0]);
                        // console.log(lat, lng);
                        panTo({ lat, lng });
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                <ComboboxInput
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({ id, description }) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}
export default Home;