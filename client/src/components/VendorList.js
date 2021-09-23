import React from 'react';
import { Link } from 'react-router-dom';
// import Card from '../components/Card/card';
import locologo from '../assets/icon/locologo.png'
import "./Card/card.css"
// YO WADDUP HOME BISCUIT

const VendorList = ({ vendors, title }) => {
    return (
        <div>
            <h5 className="vendors-header">Vendor Information</h5>
            {vendors &&
                vendors.map(vendor => (
                    <div key={vendor._id} className="">
                        <div className="">
                            <div className="cardcontainer">
                                <div className="body">
                                        <div className='card-vendor-body'>
                                            <h6 className="card-vendor-title">{vendor.title}</h6>
                                            <br />
                                            <p>{vendor.location}</p>
                                            <br />
                                            <p><a href={vendor.website} target="_blank">{vendor.website}</a></p>
                                            <br />
                                            <p>{vendor.description}</p>
                                        </div>
                                    </div>
                                <img className="card-image" src={locologo} alt="Logo"/>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default VendorList;
