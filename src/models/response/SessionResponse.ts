import { IUser } from "../IUser";


export interface IRegistrationData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface ISessionResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser
}

export interface IUpdateResponse {
    user: IUser
}

