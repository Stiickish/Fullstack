export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Person" type defines the queryable fields for every person in our data source.
  type Person {
    _id: ID!
    name: String!
    age: Int
    city: String
    url: String
    address: Address
  }

  type Address {
    _id: ID!
    street: String!
    street_number: Int
    floor: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    hello: String
    people: [Person!]!
    addresses: [Address!]!
    person(id: ID): Person!
    address(id: ID): Address!
  }
  type Mutation{
    createPerson(input: PersonInput!): Person
    deletePerson(id: ID!): Boolean
    updatePerson(id: ID!, input: PersonInput!): Person
    createAddress(input: AddressInput!): Address
    deleteAddress(id: ID!): Boolean
    updateAddress(id: ID!, input: AddressInput!): Address
  }
  input PersonInput{
    name: String!
    age: Int
    city: String
    url: String
    addressID: ID
  }
  input AddressInput{
    street: String!
    street_number: Int
    floor: String
  }
`;
