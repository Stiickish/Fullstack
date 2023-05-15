const {ApolloServer, gql} = require('apollo-server');


const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs = `#graphql
 
  type Book {
    title: String
    author: String
  }

  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({typeDefs, resolvers});

server.Listen().then(({url})=>  {
    console.log(`Server listening at ${url}`)
})