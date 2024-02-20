import { Request, Response, NextFunction } from 'express';

const surveyValid = (req: Request, res: Response, next: NextFunction) => {

    const { title } = req.body

    if(!title) {
        return res.status(400).json({
            message: "There are empty fields"
        })
    }

    next()

}

export default surveyValid