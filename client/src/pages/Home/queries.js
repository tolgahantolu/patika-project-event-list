import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getUsers {
      id
      username
    }
  }
`;

export const GET_ALL_LOCATIONS = gql`
  query getAllLocations {
    getLocations {
      id
      name
    }
  }
`;

export const GET_ALL_EVENTS = gql`
  query getAllEvents {
    getEvents {
      id
      title
      desc
      date
    }
  }
`;

export const ADD_NEW_EVENT = gql`
  mutation addNewEvent($data: AddEventInput!) {
    addEvent(data: $data) {
      title
      desc
      date
      location {
        name
      }
      user {
        id
        username
      }
    }
  }
`;
