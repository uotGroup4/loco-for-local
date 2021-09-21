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
                            {vendor.title}
                        </p>
                        <div className="card-body">
                            <p>{vendor.website}</p>
                            <p>{vendor.image}</p>
                            <p>{vendor.location}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default VendorList;
