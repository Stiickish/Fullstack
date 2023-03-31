import { data } from '../dev-data/data';

export const resolvers = {
  Query: {
    person: () => data,
  },
};
