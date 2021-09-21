import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import VendorList from '../components/VendorList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_VENDORS } from '../utils/queries';
import { SAVE_VENDOR } from '../utils/mutations';
import Auth from '../utils/auth';

const Dashboard = (props) => {
    const { username: userParam } = useParams();

    const [saveVendor] = useMutation(SAVE_VENDOR);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    }, QUERY_VENDORS);

    const user = data?.me || data?.user || {};
    const vendor = data?.vendors || [];

    // redirect to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/home" />;


        if (loading) {
            return <div>Loading...</div>;
        }

        if (!user?.username) {
            return (
                <h4>
                    You need to be logged in to see this. Use the navigation links above to
                    sign up or log in!
                </h4>
            );
        }

        const handleClick = async () => {
            try {
                await saveVendor({
                    variables: { id: vendor._id }, //vendor or vendors?
                });
            } catch (e) {
                console.error(e);
            }
        };


        return (
            <div>
                <div className="">
                    <h2 className="">
                        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>

                    {userParam && (
                        <button className="" onClick={handleClick}>
                            Save Vendor
                        </button>
                    )}
                </div>

                <div className="">
                    <div className="col-12 col-lg-3 mb-3">
                        <VendorList
                            username={user.username}
                            vendors={user.vendors}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default Dashboard;