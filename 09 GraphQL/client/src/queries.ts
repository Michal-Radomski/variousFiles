import { gql } from "@apollo/client";

//* Get Shark Query
export const GET_SHARKS = gql`
  query sharksFromDB {
    sharks {
      ID
      name
      color
      weight
    }
  }
`;

//* Delete a Shark
export const DELETE_SHARK = gql`
  mutation deleteSharkFromDB($ID: ID!) {
    deleteShark(ID: $ID) {
      ID
      name
      color
      weight
    }
  }
`;

export const ADD_SHARK = gql`
  mutation addSharkToDB($name: String, $color: String, $weight: Int) {
    addShark(name: $name, color: $color, weight: $weight) {
      ID
      name
      color
      weight
    }
  }
`;

export const EDIT_SHARK = gql`
  mutation updateSharkFromDB($ID: ID!, $name: String, $color: String, $weight: Int) {
    updateShark(ID: $ID, name: $name, color: $color, weight: $weight) {
      ID
      name
      color
      weight
    }
  }
`;
