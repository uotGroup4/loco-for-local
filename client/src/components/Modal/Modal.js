import React, { useState, useEffect } from "react";
import '../Modal/Modal.css'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { saveVendorIds, getSavedVendorIds } from '../../utils/localStorage';
import { SAVE_VENDOR } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const Modal = ({ closeModal, vendor }) => {    
    
    // let disable = useState(false);
    const handleSaveClick = async (event) => {
        handleSaveVendor(vendor);
        closeModal(false);
        // disable(true);
    };

    // ================= SAVE VENDOR START ================
    console.log(vendor)
    // state to hold saved vendorId values
    const [savedVendorIds, setSavedVendorIds] = useState(getSavedVendorIds());

    // set up useEffect to saveVendorIds list to localStorage
    useEffect(() => {
        // return () => saveVendorIds(saveVendorIds);
        localStorage.setItem("save_vendors", JSON.stringify(savedVendorIds));
    }, [savedVendorIds])

    const [saveVendor, { error }] = useMutation(SAVE_VENDOR);
    // function to handle saving vendor to db
    
    const handleSaveVendor = async (vendor) => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        try {
            //Update all properties
            const { data } = await saveVendor({
                // variables: { input: vendorToSave }
                variables: { input: {
                        _id: vendor._id,
                        title: vendor.title,
                        website: vendor.website,
                        image: vendor.image,
                        location: vendor.location
                    }
                }
            });

            if (error) {
                throw new Error('something went wrong');
            }
            // if vendor successfully saves to user, save vendor id to state
            setSavedVendorIds([...savedVendorIds, vendor._id]);
        } catch (err) {
            console.error(err);
        }
    }
    // ================= SAVE VENDOR END ================

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className='title'></div>
                <h1 id='modalTitle'>{vendor.title}</h1>
                <div className='body'>
                    <p>{vendor.location}</p>
                    <br />
                    <p><Link to={vendor.website}>{vendor.website}</Link></p>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    {Auth.loggedIn() && (
                        <button 
                            // disabled={savedVendorIds?.some((savedVendorId) => savedVendorId === vendor.vendorId)}
                            disabled={false}
                            className="save-favs-btn"
                            onClick={() => handleSaveClick()}>
                            
                            {/* {savedVendorIds?.some((savedVendorId) => savedVendorId === vendor.vendorId)
                                ? 'This vendor has already been saved'
                                : 'Add to Favourites'
                            } */}
                            Add to Favourites
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal