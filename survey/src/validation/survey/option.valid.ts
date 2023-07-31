import { Request, Response, NextFunction } from 'express';

const optionValid = (req: Request, res: Response, next: NextFunction) => {

    const { name } = req.body

    if(!name) {
        return res.status(400).json({
            message: "There are empty fields"
        })
    }

    if(name.length >= 100) {
        return res.status(400).json({
            message: "Name must be less than 100 characters"
        })
    }

    next()

}

export default optionValid