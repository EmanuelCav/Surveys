import { Router } from "express";

import * as optionCtrl from '../controller/options.ctrl'

import auth from '../middleware/auth/auth'
import optionValid from "../middleware/validation/validation/option.valid";

const router = Router()

router.patch('/options/:id', auth, optionCtrl.createOption)
router.patch('/options/:id/surveys/:surveyId', auth, optionCtrl.removeOption)
router.patch('/options/:id/votes/:surveyId', auth, optionCtrl.vote)
router.delete('/options', optionCtrl.removeAllOptions)
router.put('/options/:id', auth, optionValid, optionCtrl.updateOptions)

export default router