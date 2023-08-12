export interface ICounterUser {
    user: object;
    isLoggedIn: boolean;
}

export interface IUser {
    _id: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    email: string;
    gender: string;
    password: string;
    followers: string[];
    following: string[];
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    username: string;
    email: string;
    gender: string;
    password: string;
    confirm: string;
}
