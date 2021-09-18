const { Schema, model } = require('mongoose');

const vendorSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    // does this vendorId need to come from Google?
    // vendorId: {
    //     type: String,
    //     required: true,
    // },
    image: {
        type: String,
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    // hours: {
    //     type: String,
    // },
    description: {
        type: String,
    }
});

const Vendor = model('Vendor', vendorSchema);

module.exports = Vendor;