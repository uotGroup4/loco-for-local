import { gql } from '@apollo/client';

export const QUERY_VENDORS = gql`
    query vendors {
        _id
        title
        website
        image
        location
    }
`;

// export const QUERY_VENDOR = gql`
//     query vendor($id: ID!)
// `;