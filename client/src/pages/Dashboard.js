import React from 'react';
import Auth from '../utils/auth';

import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_VENDOR } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { removeVendorId } from '../utils/localStorage';

const Dashboard = (vendor) => {

    const { loading, data } = useQuery(GET_ME);
    const [removeVendor, { error }] = useMutation(REMOVE_VENDOR);
    const userData = data?.me || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userData?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the links above to
                sign up or log in!
            </h4>
        );
    }

    // funciton to accept vendors _id value as param and delete vendor from user db
    const handleRemoveVendor = async (vendor) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log(vendor)
        if (!token) {
            return false;
        }

        try {
            const { data } = await removeVendor({
                variables: {
                    input: {
                        _id: vendor._id,
                        title: vendor.title,
                        website: vendor.website,
                        image: vendor.image,
                        location: vendor.location,
                        coordinates: vendor.coordinates
                    }
                }
            });

            if (error) {
                throw new Error('Something went wrong');
            }
            // upon success, remove book's id from localStorage
        removeVendorId(vendor._id);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="">
                <h2 className="">
                    {userData ? `${userData.username}'s` : 'your'} dashboard
                </h2>
            </div>

            <div className="dashboard-cards">
                {userData.savedVendors.map((vendor) => {
                    console.log(vendor)
                    return (
                        <div className="dashboard-card" key={vendor.vendorId}>
                            {vendor.image ? <img src={vendor.image} alt={`${vendor.title}`} /> : null}
                            <div className="svBody">
                                <div className="card-title">
                                    <h4>{vendor.title}</h4>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <a href={vendor.website} target="_blank">{vendor.website}</a>
                                    </p>
                                    <br />
                                    <p>{vendor.location}</p>
                                </div>
                                <button
                                    className="removeButton"
                                    id={vendor._id}
                                    onClick={() => handleRemoveVendor(vendor)}
                                >
                                    Remove Vendor
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default Dashboard;