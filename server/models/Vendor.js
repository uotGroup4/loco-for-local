const { Schema, model } = require('mongoose');

const vendorSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    coordinates: []
    // hours: {
    //     type: String,
    // },
});

const Vendor = model('Vendor', vendorSchema);

module.exports = { Vendor , vendorSchema };