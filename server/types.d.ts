declare namespace Express {
    export interface Request {
        permission: number | undefined;
        user: number
    }
}