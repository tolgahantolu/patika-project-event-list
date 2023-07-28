import { gql } from "@apollo/client";

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
