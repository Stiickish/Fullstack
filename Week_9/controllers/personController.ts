import {Request, Response} from 'express';
import Person from "../models/personModel";

interface Person {
    id:string,
    name:string,
    age:number,
    city:string,
}

export const getAllPeople = async (req:Request, res:Response) => {
    try {
        const people:Person[] = await Person.find();
        res.status(200)
            .json({
                data:people
            });
    } catch (err) {
        res.status(500)
            .json({
                message: err
            });
    }
}

export const getPersonById = async (req:Request, res:Response) => {
    try {
        const person:Person|undefined = await Person.findById(req.params.id);
        res.status(200)
            .json({
                data:person
            });
    } catch (err) {
        res.status(404)
            .json({
                message:err
            });
    }
}

export const createPerson = async (req:Request, res:Response) => {
    try {
        const newPerson = await Person.create(req.body);
        res.status(201)
            .json({
                data:newPerson
            });
    } catch (err) {
        res.status(400)
            .json({
                message: err
            });
    }
}

export const deletePerson = async (req:Request, res:Response) => {
    try {
        await Person.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(204).json;
    }
}

export const updatePerson = async (req:Request, res:Response) => {
    try {
        const updatedPerson = await Person.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200)
            .json({
                updatedPerson
            });
    } catch (err) {
        res.status(404)
            .json({
                message: err
            });
    }
}