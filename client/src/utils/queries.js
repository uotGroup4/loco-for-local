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