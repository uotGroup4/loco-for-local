import React, { useEffect, useState } from 'react';
import Modal from "../components/Modal/Modal";
import VendorList from '../components/VendorList';

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
    width: "80vw",
    height: "80vh",
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

    //for the modal set show
    const [show, setShow] = useState(false);

    function showModal(vendor) {
        // console.log(vendor.title)
        setShow(true)
        // console.log(show)
    }
    // get vendor data out of query's response
    const vendors = data?.vendors || [];

    // these if's need to be last they load the map
    if (loadError) return "Error loading map";
    if (!isLoaded) return "Loading Maps";

    return (
        <section>
            <container className="page-header">
                <div className="" id="home">

                </div>


            </container>



            <div>
                <div className="map-container">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={10}
                        center={center}
                        options={options}
                        resetBoundsOnResize={true} //to resize the map without changing integrity

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
                                    showModal(vendor)
                                }}
                            />
                        ))}
                        <Modal
                            props={selected}
                            // website={selected.website}
                            // title={selected.title} 
                            onClose={() => setShow(false)} show={show}
                        />
                    </GoogleMap>
                </div>

                {/* Testing out vendor list */}
                <div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <VendorList vendors={vendors} title="Vendor List" />
                    )}
                </div>
                <p>
                    Add a brief description of how to search with a h1
                </p>
            </div>

        </section>


    );
}

export default Home;