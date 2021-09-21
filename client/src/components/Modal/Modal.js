import React, { useState, useEffect } from "react";
import '../Modal/Modal.css'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { saveVendorIds, getSavedVendorIds } from '../../utils/localStorage';
import { SAVE_VENDOR } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const Modal = ({ closeModal, vendor }) => {
    // ================= SAVE VENDOR START ================
    // state to hold saved vendorId values
    const [savedVendorIds, setSavedVendorIds] = useState(getSavedVendorIds());

    const [saveVendor, { error }] = useMutation(SAVE_VENDOR);

    // set up useEffect to saveVendorIds list to localStorage
    useEffect(() => {
        return () => saveVendorIds(saveVendorIds);
    })

    // function to handle saving vendor to db
    const handleSaveVendor = async (vendorId) => {
        // find vendor and match id
        const vendorToSave = vendor.vendorId === vendorId; // hmmm

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await saveVendor({
                variables: { input: vendorToSave }
            });

            if (error) {
                throw new Error('something went wrong');
            }

            console.log(`handleSaveVendor ${data}`);

            // if vendor successfully saves to user, save vendor id to state
            setSavedVendorIds([...saveVendorIds, vendorToSave.vendorId]);
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
                            disabled={savedVendorIds?.some((savedVendorId) => savedVendorId === vendor.vendorId)}
                            className=""
                            onClick={() => handleSaveVendor(vendor.vendorId)}>
                            {savedVendorIds?.some((savedVendorId) => savedVendorId === vendor.vendorId)
                                ? 'This vendor has already been saved'
                                : 'Add to Favourites'
                            }
                            </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal