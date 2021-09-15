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
    }

    type Vendor {
        vendorId: String
        title: String
        website: String
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input  vendorInput {
        vendorId: String
        title: String
        website: String
        image: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveVendor(input: vendorInput!): User
        removeVendor(vendorId: String!): User
    }
`;

//export typeDefs
module.exports = typeDefs;