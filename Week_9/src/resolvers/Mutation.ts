import Person from "../../models/personModel";
import Address from "../../models/addressModel";
import {ObjectId} from "mongoose";

interface Address {
    id:ObjectId,
    street:string,
    zip:number,
    people:Person[]
}

interface Person {
    id:ObjectId,
    name:string,
    age:number,
    addresses:Address[]
}

export default {
    createPerson: async (_parent:any, {input}:any) => {
        return await Person.create(input);
    },
    createAddress: async (_parent:any, {input}:any)=> {
        return await Address.create(input);
    },
    addPersonToAddress: async (_parent:any, {input}:any)=> {
        const person = await Person.findById(input.personId);
        const address = await Address.findById(input.addressId);

        if (!person!.addresses.includes(input.addressId)) {
            person!.addresses.push(input.addressId);
            await person!.save();
        }

        if (!address!.people.includes(input.personId)) {
            address!.people.push(input.personId);
            await address!.save();
        }

        const populatedAddress = await address!.populate("people");

        return populatedAddress;
    },
    removePersonFromAddress: async (_parent:any, {input}:any) => {
        const person:any = await Person.findById(input.personId);
        const address:any = await Address.findById(input.addressId);

        if (person!.addresses.includes(input.addressId)) {

            person!.addresses.splice(person!.addresses.indexOf(address), 1);
            await person!.save();
        }

        if (address!.people.includes(input.personId)) {

            address!.people.splice(address!.people.indexOf(person), 1);
            await address!.save();
        }

        const updateAddress = await address!.populate("people");

        return updateAddress;
    },
    deletePerson: async (_parent:any, {id}:any)=> {
        await Person.findByIdAndDelete(id);
    }
}