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
    coordinates: [String]
});

const Vendor = model('Vendor', vendorSchema);

module.exports = { Vendor , vendorSchema };