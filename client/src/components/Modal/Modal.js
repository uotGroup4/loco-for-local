import React, { useState, useEffect } from 'react';
import '../Modal/Modal.css'
import Auth from '../../utils/auth';

// import { saveVendorIds, getSavedVendorIds } from '../../utils/localStorage';
import { SAVE_VENDOR } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

// import function to save to local storage
import { saveVendorId, getSavedVendorId  } from '../../utils/localStorage'


// initialize modal function
const Modal = ({ closeModal, vendor }) => {

    // create state to hold saved bookId values
    const [savedVendorId, setSavedVendorId] = useState(getSavedVendorId());

    const [saveVendor] = useMutation(SAVE_VENDOR);

    // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
        return () => saveVendorId(savedVendorId);
    });


    // handle save to favourites button click
    const handleSaveClick = async (event) => {
        handleSaveVendor(vendor);
    };

    // ================= SAVE VENDOR START ================

    // function to handle saving vendor to db
    const handleSaveVendor = async () => {

        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }
        try {
            //Update all properties
            await saveVendor({
                variables: {
                    input: {
                        _id: vendor._id,
                        title: vendor.title,
                        website: vendor.website,
                        image: vendor.image,
                        location: vendor.location,
                        coordinates: vendor.coordinates
                    }
                }
            });
            // if vendor saves to users account save vendorid to state
            setSavedVendorId([...savedVendorId, vendor._id]);
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
                    <p><a href={vendor.website} target="_blank">{vendor.website}</a></p>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                    {Auth.loggedIn() && (
                        <button
                            className="save-favs-btn"
                            onClick={() => handleSaveClick()}>
                            Add to Favourites
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal