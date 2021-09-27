// import gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        vendorCount: Int
        savedVendors: [Vendor]
        savedShops: [Shop]
    }

    type Vendor {
        _id: ID
        title: String
        website: String
        image: String
        location: String
        coordinates: [String]
    }

    type Shop {
        _id: ID
        title: String
        image: String
        website: String
        location: String
        description: String
        coordinates: [String]
    }

    input vendorInput {
        _id: String
        title: String!
        website: String!
        image: String
        location: String!
        coordinates: [String]!
    }

    input shopInput {
        _id: String
        title: String!
        website: String!
        image: String!
        description: String!
        location: String!
        coordinates: [String]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        vendors: [Vendor]
        vendor(_id: ID!): Vendor
        shops: [Shop]
        shop(_id: ID!): Shop
    }

    type Mutation { 
        # user manipulation mutations
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        # shop and vendor manipulation mutations
        addVendor(input: vendorInput!): Vendor
        addShop(input: shopInput!): Shop
        removeVendor(input: vendorInput!): User
        removeShop(shopId: String!): User
        saveVendor(input: vendorInput!): User
        saveShop(input: shopInput!): User
        # remove from db mutations
        deleteVendor(_id: ID!): Vendor
        deleteShop(_id: ID!): Shop
        deleteUser(_id: ID!): User
    }
`;

//export typeDefs
module.exports = typeDefs;