import React from 'react';
import { Link } from 'react-router-dom';

const VendorList = ({ vendors, title }) => {
    return (
        <div>
            <h5>All the vendors</h5>
            {vendors &&
                vendors.map(vendor => (
                    <div key={vendor._id} className="card">
                        <p className="card-header">
                            <Link
                                to={`/dashboard/${vendor.title}`}
                                style={{ fontWeight: 700 }}
                                className=""
                            >
                                {vendor.title}
                                {/* SHOULD THIS LINK TO A VENDOR PAGE??? */}
                            </Link>
                        </p>
                        <div className="card-body">
                            <Link
                            // THIS SHOULD LINK TO VENDOR WEBSITE -- CURRENTLY LINKS TO localhost:3000/http://vendorwebsite
                                to={`${vendor.website}`}
                            >
                                <p>{vendor.website}</p>
                            </Link>
                            <p>{vendor.image}</p>
                            <p>{vendor.location}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default VendorList;
