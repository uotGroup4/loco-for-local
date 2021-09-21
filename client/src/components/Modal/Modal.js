import React from "react";
// import '../Modal/Modal.css'

function Modal({closeModal, vendor}) {
    console.log(vendor)
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => closeModal(false)}> X </button>
                <div className='title'></div>
                    <h1>{vendor.title}</h1>
                <div className='body'>
                    <p>{vendor.location}</p>
                    <p>{vendor.website}</p>
                </div>
                <div className='footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button>Save to Favourites</button>
                </div>
            </div>
        </div>
    )
}

export default Modal