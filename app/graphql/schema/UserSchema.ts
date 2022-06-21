import { gql } from "apollo-server-express";

export default gql`
  type Person {
    id: ID!
    name: String
  }

  type Query {
    getAllPeople: [Person]
    getPerson(id: Int): Person
  }

  type Mutation {
    addPerson(name: String): Person
  }
`;
