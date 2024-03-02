import { Router } from "express";

import * as commentCtrl from '../controller/comments.ctrl'

import commentValid from '../validation/survey/comment.valid'

import auth from '../middleware/auth/auth'

const router = Router()

router.patch('/comments/:id', auth, commentValid, commentCtrl.createComment)
router.delete('/comments/:id', auth, commentCtrl.removeComment)
router.patch('/comments/like/:id', auth, commentCtrl.likeComment)

export default router