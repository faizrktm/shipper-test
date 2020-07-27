import { gql } from "@apollo/client";

export const GET_DRIVERS = gql`
  query GetDrivers($q: String) {
    drivers(q: $q) {
      id
      name
      phone_number
      schedule
      percentage
    }
  }
`;

export const ADD_DRIVER = gql`
  mutation AddDriver($name: String!, $phone_number: String!){
    success,
    message,
    driver {
      id
      name
      phone_number
      schedule
      percentage
    }
  }
`;
