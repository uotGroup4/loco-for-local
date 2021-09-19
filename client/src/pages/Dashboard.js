import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';

// import VendorForm from '../components/VendorForm';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';

const Dashboard = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    const user = data?.user || {};

    // // redirect to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Redirect to="/profile" />;
    // }

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // };

    return (
        <div>
            Dashboard stuff Here
            Viewing {userParam ? `${user.username}'s` : 'your'} dashboard.
        </div>
    );
};

export default Dashboard;
