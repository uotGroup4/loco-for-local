import React from 'react';
import { Link } from 'react-router-dom';

const VendorList = ({ username, vendor }) => {
    if (!vendor || !vendor.length) {
        return <p className="">{username}, save some vendors!</p>;
    }

    return (
        <div>
            <h5>
                {username}'s saved vendors
            </h5>
            {vendor.map(vendor => (
                <button className="" key={vendor._id}>
                    {/* <Link to={`/profile/${friend.username}`}>{friend.username}</Link> */}
                    {/* link to vendor modal? */}
                </button>
            ))}
        </div>
    );
};

export default VendorList;
