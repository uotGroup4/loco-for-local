import { gql } from '@apollo/client';

// ALL vendors
export const QUERY_VENDORS = gql`
query vendor {
    vendors {
      _id
      title
      website
      image
      location
      coordinates
    }
  }
`;

// Vendor by id
export const QUERY_VENDOR = gql`
    query vendor($id: ID!) {
        vendor(_id: $id) {
            _id
            title
            website
            image
            location
        }
    }
`;

// // User information by username
// export const QUERY_USER = gql`
//     query user($username: String!) {
//         user(username: $username) {
//             _id
//             username
//             email
//             vendorCount
//             savedVendors {
//                 _id
//                 title
//                 website
//                 image
//                 location
//             }
//             savedShops {
//                 _id
//                 title
//                 website
//                 image
//                 location
//                 description
//             }
//         }
//     }
// `;

// export const QUERY_ME = gql`
//     {
//         me {
//             _id
//             username
//             email
//             vendorCount
//             savedVendors {
//                 _id
//                 title
//                 website
//                 image
//                 location
//             }
//             savedShops {
//                 _id
//                 title
//                 website
//                 image
//                 location
//                 description
//             }
//         }
//     }
// `;

// export const QUERY_ME_BASIC = gql`
//     { 
//         me {
//             _id
//             username
//             email
//         }
//     }
// `;

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedVendors {
                _id
                title
                website
                image
                location
                coordinates
            }
        }
    }
`;