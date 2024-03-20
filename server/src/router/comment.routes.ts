import { Router } from "express";

import * as commentCtrl from '../controller/comments.ctrl'

import auth from '../middleware/auth/auth'
import commentValid from '../middleware/validation/validation/comment.valid'

const router = Router()

router.patch('/comments/:id', auth, commentValid, commentCtrl.createComment)
router.delete('/comments/:id', auth, commentCtrl.removeComment)
router.patch('/comments/:id/like', auth, commentCtrl.likeComment)

export default router