import { Router } from "express";

import * as commentCtrl from '../controller/comments.ctrl'

import auth from '../middleware/auth/auth'

const router = Router()

router.patch('/comments/:id', auth, commentCtrl.createComment)
router.delete('/comments/:id', auth, commentCtrl.removeComment)
router.patch('/comments/like/:id', auth, commentCtrl.likeComment)

export default router