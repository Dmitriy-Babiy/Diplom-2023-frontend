import { array } from 'yup';
import { IUser } from './IUser';

export interface IRoom {
    _id: string;
    title: string;
    description: string;
    numberOfBeds: number;
    numberOfPersons: number;
    price: number;
    discount: number;
    images: Array<string>;
    services: IServiceArray;
    comments: Array<IComment>;
}

export interface IRooms extends Array<IRoom> {}

export interface IComment {
    _id: string;
    user: {
        _id: string;
        firstName: string;
        lastName: string;
        avatar: string | null;
    };
    text: string;
    rating: number;
    description: string;
    createdAt: string;
}

export interface IService {
    [key: string]: boolean;
}

export interface IServiceArray extends Array<IService> {}
