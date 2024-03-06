import { Router } from "express";

import * as surveysCtrl from '../controller/surveys.ctrl';

import createValid from '../middleware/validation/validation/create.valid';

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/surveys', surveysCtrl.surveys)
router.get('/surveys/follow', auth, surveysCtrl.surveysFollow)
router.get('/surveys/:id', auth, surveysCtrl.survey)
router.post('/surveys', auth, createValid, surveysCtrl.createSurvey)
router.delete('/surveys/:id', auth, surveysCtrl.removeSurvey)
router.patch('/surveys/recommend/:id', auth, surveysCtrl.recommendSurvey)

export default router