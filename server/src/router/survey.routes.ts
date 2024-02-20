import { Router } from "express";

import * as surveysCtrl from '../controller/surveys.ctrl';

import surveyValid from '../validation/survey/survey.valid';

import auth from '../middleware/auth'

const router = Router()

router.get('/surveys', surveysCtrl.surveys)
router.get('/surveys/follow', auth, surveysCtrl.surveysFollow)
router.get('/surveys/profile/:id', auth, surveysCtrl.surveysProfile)
router.get('/surveys/:id', auth, surveysCtrl.survey)
router.post('/surveys', auth, surveyValid, surveysCtrl.createSurvey)
router.delete('/surveys/:id', auth, surveysCtrl.removeSurvey)
router.patch('/surveys/recommend/:id', auth, surveysCtrl.recommendSurvey)

export default router