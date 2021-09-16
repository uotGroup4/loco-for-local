const { Schema } = require('mongoose');

// subdocument schema, not own model but used in User.js 'savedVendor' array
const vendorSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    // does this vendorId need to come from Google?
    vendorId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    website: {
        type: String,
    },
    // hours: {
    //     type: String,
    // },
});

module.exports = vendorSchema;