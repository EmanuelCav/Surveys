import { Request, Response, NextFunction } from 'express';

const commentValid = (req: Request, res: Response, next: NextFunction) => {

    const { comment } = req.body

    if(!comment) {
        return res.status(400).json({
            message: "There are empty fields"
        })
    }

    if(comment.length >= 300) {
        return res.status(400).json({
            message: "Comment must be less than 300 characters"
        })
    }

    next()

}

export default commentValid