import { Person, Context, Args, Address } from '../../types/types';
import peopleModel from '../../models/personModel';
import addressModel from '../../models/addressModel';

export const Query = {
  people: async (_parent: never, _args: Args) => peopleModel.find(),
  addresses: async (_parent: never, _args: Args) => addressModel.find(),
  person: async (_parent: never, { id }: Args) =>
    peopleModel.findById(id),
  address: async (_parent: never, { id }: Args) => addressModel.findById(id),
};
