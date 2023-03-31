// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String
    author: String
    ratings: [Rating!]!
  }
   type Query {
    hello: String
    users: [User]
    
  }

  type Rating{
    id: ID!
    value: Int!
    title: String!
    description: String!
    book: Book!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
  type Mutation {
    addBook(input: BookInput): Book
    deleteBook(id:ID!): Book
    createRating(input: RatingInput!):Rating
  }
  input BookInput{
    title: String
    author: String
  }
  input RatingInput{
    value: Int!
    title: String!
    description: String!
    bookId: ID!
  }
`;


export default typeDefs