import { Router } from "express";

import * as commentCtrl from '../controller/comments.ctrl'

import commentValid from '../validation/survey/comment.valid'

import auth from '../middleware/auth'

const router = Router()

router.patch('/comments/:id', auth, commentValid, commentCtrl.createComment)
router.delete('/comments/:id/:surveyid', auth, commentCtrl.removeComment)
router.put('/comments/:id', auth, commentValid, commentCtrl.updateComment)
router.patch('/comments/push/:id', auth, commentValid, commentCtrl.pushComment)
router.patch('/comments/like/:id', auth, commentCtrl.likeComment)

export default router