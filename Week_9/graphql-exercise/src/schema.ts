export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Person {
    id: ID
    name: String
    age: Int
    city: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    hello: String
    person: [Person]
  }
  type Mutation{
    addPerson(input: PersonInput): Person
    deletePerson(id: ID!): Person
  }
  input PersonInput{
    name: String
    age: Int
    City: String
  }
`;
