// import React, { useState, useEffect } from "react";
import React from 'react';
import '../Modal/Modal.css'
import Auth from '../../utils/auth';

// import { saveVendorIds, getSavedVendorIds } from '../../utils/localStorage';
import { SAVE_VENDOR } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

const Modal = ({ closeModal, vendor }) => {

    // handle save to favourites button click
    const handleSaveClick = async (event) => {
        handleSaveVendor(vendor);
        closeModal(false);
    };

    // ================= SAVE VENDOR START ================
    const [saveVendor] = useMutation(SAVE_VENDOR);

    // function to handle saving vendor to db
    const handleSaveVendor = async () => {

        try {
            await saveVendor({
                variables: { input: vendor._id }
            });
        }
        catch (e) {
            console.log(e);
        }
        // const token = Auth.loggedIn() ? Auth.getToken() : null;
        // console.log(`auth token ${token}`);
        // if (!token) {
        //     return false;
        // }
        // try {
        //     //Update all properties
        //     const { data } = await saveVendor({
        //         variables: {
        //             input: {
        //                 _id: vendor._id,
        //                 title: vendor.title,
        //                 website: vendor.website,
        //                 image: vendor.image,
        //                 location: vendor.location
        //             }
        //         }
        //     });

        //     if (error) {
        //         throw new Error('something went wrong');
        //     }
        // } catch (err) {
        //     console.error(err);
        // }
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