import { Request, Response, NextFunction } from 'express';

const loginValid = (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body

    if(!email || !password) {
        return res.status(400).json({
            message: "There are empty fields"
        })
    }

    next()

}

export default loginValid