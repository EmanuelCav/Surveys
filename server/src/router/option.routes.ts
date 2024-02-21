import { Router } from "express";

import * as optionCtrl from '../controller/options.ctrl'

import optionValid from '../validation/survey/option.valid'

import auth from '../middleware/auth'

const router = Router()

router.patch('/options/:id', auth, optionValid, optionCtrl.createOption)
router.delete('/options/:id/:surveyId', auth, optionCtrl.removeOption)
router.patch('/options/vote/:id/:surveyId', auth, optionCtrl.vote)

export default router