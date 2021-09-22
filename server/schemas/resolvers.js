const { AuthenticationError } = require('apollo-server-express');
const { User, Vendor, Shop } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        },
        // Get all vendors query
        vendors: async () => {
            return Vendor.find()
            // It'd be nice to sort by alphabetical perhaps
        },
        // Get single vendor by id
        vendor: async (parent, { _id }) => {
            return Vendor.findOne({ _id });
        },
        // Get all shops query
        shop: async () => {
            return Shop.find()
            // It'd be nice to sort by alphabetical perhaps
        },
        shop: async (parent, { _id }) => {
            return Shop.findOne({ _id });
        }
    },

    Mutation: {
        // Sign up/ Add a user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        // Login user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                console.log('user exists')
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            console.log("correctp is " + correctPw)

            if (!correctPw) {
                console.log('correct password')
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        // Add a vendor to the database
        // addVendor: async (parent, args) => {
        //     const vendor = await Vendor.create(args);

        //     return { vendor };
        // },

        // save a vendor to user favourites
        saveVendor: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedVendors: input } },
                    { new: true }
                );

                //updatedUser.savedVendors = [{ title: vendor.title }]
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },

        removeVendor: async (parent, { vendorId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedVendor: { vendorId: vendorId } } },
                    { new: true, runValidators: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },

        // save shop to user favourites
        saveShop: async (parent, { input }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { saveShop: input } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeShop: async (parent, { shopId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedShop: { shopId: shopId } } },
                    { new: true, runValidators: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },

        // addRating??
    }
};

module.exports = resolvers;