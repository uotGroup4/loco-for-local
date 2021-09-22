import React from 'react';
import Auth from '../utils/auth';

import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_VENDOR } from '../utils/mutations';
import { GET_ME } from '../utils/queries';

const Dashboard = (vendor) => {

    console.log(`dashboard ${vendor}`);
    // const { username: userParam } = useParams();
    const { loading, data } = useQuery(GET_ME);
    const [removeVendor, { error }] = useMutation(REMOVE_VENDOR);

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
    const handleRemoveVendor = async (vendor) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        console.log(`removing vendor ${vendor}`);
        try {
            const { data } = await removeVendor({
                variables: {
                    input: {
                        _id: vendor._id,
                        title: vendor.title,
                        website: vendor.website,
                        image: vendor.image,
                        location: vendor.location
                    }
                }
            });

            // console.log("vendor data:", data);
            if (error) {
                throw new Error('Something went wrong');
            }
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

            <div className="about-cards">
                {userData.savedVendors.map((vendor) => {
                    return (
                        <div className="card" key={vendor.vendorId}>
                            {vendor.image ? <img src={vendor.image} alt={`${vendor.title}`} /> : null}
                            <div className="svBody">
                                <div className="card-title">
                                    <h4>{vendor.title}</h4>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <a href={vendor.website}>{vendor.website}</a>
                                    </p>
                                    <br />
                                    <p>{vendor.location}</p>
                                </div>
                                <button
                                    className="row button"
                                    onClick={() => handleRemoveVendor()}>
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