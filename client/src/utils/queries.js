import { gql } from '@apollo/client';

export const QUERY_VENDORS = gql`
    query vendors($username: String)
`;