import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import VendorList from '../components/VendorList';

import Auth from '../utils/auth';
import { removeVendorId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { REMOVE_VENDOR } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const Dashboard = (props) => {
    // const { username: userParam } = useParams();
    const { loading, data } = useQuery(GET_ME);
    // const [removeVendor, { error }] = useMutation(REMOVE_VENDOR);

    // const vendor = data?.vendors || [];

    const userData = data?.me || {};
    console.log(userData);

    // redirect to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Redirect to="/dashboard" />;
    // }

    // if data isn't here yet, say loading
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
    // const handleDeleteVendor = async (vendorId) => {
    //     const token = Auth.loggedIn() ? Auth.getToken() : null;

    //     if (!token) {
    //         return false;
    //     }

    //     try {
    //         const { data } = await removeVendor({
    //             variables: { vendorId }
    //         });

    //         console.log("vendor data:", data);

    //         if (error) {
    //             throw new Error('Something went wrong');
    //         }

    //         //upon success, remove vendor's id from localstorage
    //         removeVendorId(vendorId);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <div>
            <div className="">
                <h2 className="">
                    {userData ? `${userData.username}'s` : 'your'} dashboard
                </h2>
            </div>

            <div className="savedVendors">
                {userData.savedVendors.map((vendor) => {
                    return (
                        <div className="savedVendorsCard" key={vendor.vendorId}>
                            {vendor.image ? <img src={vendor.image} alt={`${vendor.title}`} /> : null}
                            <div className="svBody">
                                <h3>{vendor.title}</h3>
                                <p>{vendor.website}</p>
                                <p>{vendor.location}</p>
                                {/* <button className="del-ven-btn" onClick={() => handleDeleteVendor(vendor.vendorId)}> */}
                                    {/* Remove Vendor
                                </button> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default Dashboard;