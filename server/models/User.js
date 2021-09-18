const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

// import schema from Vendor.js
// const vendorSchema = require('./Vendor');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        // set savedVendors to be array of data that adheres to vendorSchema
        // savedVendors: [vendorSchema],
    },
    // virtuals
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `vendorCount` with the number of saved vendors we have
// ================================== IDK IF WE NEED/WANT THIS ONE ============================
userSchema.virtual('vendorCount').get(function () {
    return this.savedVendors.length;
});

const User = model('User', userSchema);

module.exports = User;