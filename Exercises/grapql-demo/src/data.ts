export const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@email.com",
    age: 25,
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "jane@email.com",
    age: 30,
  },
  {
    id: "3",
    name: "John Smith",
    email: "john2@email.com",
    age: 35,
  },
  {
    id: "4",
    name: "Arne Aligator",
    email: "arne@email.com",
    age: 5,
  },
];

export const books = [
  {
    id: 1,
    title: "The Awakening",

    author: "Kate Chopin",
  },

  {
    id: 2,
    title: "City of Glass",

    author: "Paul Auster",
  },
];

// Resolvers define how to fetch the types defined in your schema.

// This resolver retrieves books from the "books" array above.

export const ratings = [
  {
    id: 1,
    value: 2,
    title: "It's okay",
    description: "Could be better",
    bookId: 1,
  },
  {
    id: 2,
    value: 5,
    title: "Perfect!",
    description: "The best book ever published",
    bookId: 1,
  },
];
