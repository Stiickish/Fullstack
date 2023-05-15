export type Address = {
  _id?: string;
  street: string;
  street_number: number;
  floor: string;
};

export type Person = {
  _id?: string;
  name: string;
  age: Number;
  city: string;
  address: Address;
};

export type Args = {
  id: String;
  input: Person | Address;
};

export type Context = {
  persons: Person[];
  addresses: Address[];
};

export type Query = {
  person(id: string): Person;
};

