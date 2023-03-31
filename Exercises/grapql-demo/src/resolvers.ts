import { books, users, ratings } from "./data";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    users: () => users,
    books: () => books,
  },
  Mutation: {
    addBook: (parent, args, context) => {
      const book = {
        id: books.length + 1,
        title: args.input.title,
        author: args.input.author,
      };
      books.push(book);
      return book;
    },
    deleteBook: (parent, args, context) => {
      const book = books.findIndex((x) => x.id === args.id);
      const deltedBook = books.splice(book, 1);
      return deltedBook[0];
    },
    createRating: (_parent, { input }) => {
      const newRating = {
        id: ratings.length + 1,
        value: input.value,
        title: input.title,
        description: input.description,
        bookId: parseInt(input.bookId),
      };
      ratings.push(newRating);
      return newRating;
    },
  },
};
