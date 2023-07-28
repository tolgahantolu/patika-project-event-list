import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      desc
      location {
        name
      }
      user {
        username
      }
    }
  }
`;
