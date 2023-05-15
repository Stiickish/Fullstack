import { Address, Person, Args } from '../../types/types';
import addressModel from '../../models/addressModel';
import personModel from '../../models/personModel';

export default {
  createAddress: (_parent: never, { input }: Args) => {
    if ('street' in input) {
      // input is a Address
      let newAddress: Address = {
        street: input.street,
        street_number: input.street_number,
        floor: input.floor,
      };
      let createdAddress = addressModel.create(newAddress);
      return createdAddress;
    } else {
      return null;
    }
  },
  deleteAddress: (_parent: never, { id }: Args): boolean | null => {
    let deletedAddress = addressModel.findById(id);
    if (deletedAddress === null) {
      return null; //address not found
    }
    return true; //address found and deleted
  },
  updateAddress: (_parent: never, { id, input }: Args) => {
    if ('street' in input) {
      try {
        let updatedAddress = addressModel.findByIdAndUpdate(id, input, {
          new: true,
          runValidators: true,
        });
        return updatedAddress;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
  createPerson: async (_parent: Person, { input }: Args) => {
    if ('address' in input && 'city' in input.address) {
      //input is address
      let newPerson: Person = {
        name: input.name,
        age: input.age,
        city: input.city,
        address: input.address,
      };
      try {
        let createdPerson = await personModel.create(newPerson);
        return createdPerson;
      } catch (error) {
        console.error(error);
        return null;
      }
    } else {
      throw new Error('Invalid input');
    }
  },
};
