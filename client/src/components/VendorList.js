import React from 'react';
import { Link } from 'react-router-dom';
// import Card from '../components/Card/card';
import locologo from '../assets/icon/locologo.png'
import "./Card/card.css"
// YO WADDUP HOME BISCUIT

const VendorList = ({ vendors, title }) => {
    return (
        <div>
            <h5>All the vendors</h5>
            {vendors &&
                vendors.map(vendor => (
                    <div key={vendor._id} className="">
                        <div className="">
                            <div className="cardcontainer">
                                <div className="title">Vendor Information</div>
                                <div className="body">
                                    <div className='body'>
                                        <p>{vendor.name}</p>
                                        <br />
                                        <p>{vendor.location}</p>
                                        <br />
                                        <p><Link to={vendor.website}>{vendor.website}</Link></p>
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
