import React from 'react';
// import { useParams } from 'react-router-dom';

// this below - we are using a modal, so not sure if this is what it would be
// import VendorForm from '../components/VendorModal';

import { useQuery } from '@apollo/client';
import { QUERY_VENDOR } from '../utils/queries';
// import Auth from '../utils/auth';

const SingleVendor = (props) => {
    const { id: vendorId } = useParams();

    const { loading, data } = useQuery(QUERY_VENDOR, {
        variables: { id: vendorId }
    });

    const vendor = data?.vendor || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Modal for Vendors perhaps?
            {vendor.title}
            {vendor.website}
            {vendor.image}
            {vendor.location}
        </div>
    );

};
