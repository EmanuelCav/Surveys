import { Router } from "express";

import * as optionCtrl from '../controller/options.ctrl'

import auth from '../middleware/auth/auth'

const router = Router()

router.patch('/options/:id', auth, optionCtrl.createOption)
router.patch('/options/:id/surveys/:surveyId', auth, optionCtrl.removeOption)
router.patch('/options/vote/:id/:surveyId', auth, optionCtrl.vote)
router.put('/options/:id', auth, optionCtrl.updateOptions)

export default router