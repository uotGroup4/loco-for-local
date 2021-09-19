const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
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
    description: {
      type: String
    }
    // hours: {
    //     type: String,
    // },
});

const Shop = model('Shop', shopSchema);

module.exports = Shop;