import { gql } from '@apollo/client';

// login user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// add user through signup page
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// mut to save vendor
export const SAVE_VENDOR = gql`
  mutation saveVendor($input: vendorInput!) {
    saveVendor(input: $input) {
      _id
      username
      email
      savedVendors {
        _id
        title
        image
        website
        location
        coordinates
      }
    }
  }
`;

// mut to remove vendor
export const REMOVE_VENDOR = gql`
  mutation removeVendor($bookId: String!) {
    removeVendor(vendorId: $vendorId) {
      _id
      username
      email
      savedVendors {
        vendorId
        title
        image
        website
        location
        coordinates
      }
    }
  }
`;
