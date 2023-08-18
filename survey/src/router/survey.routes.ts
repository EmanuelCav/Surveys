import { Router } from "express";

import * as surveysCtrl from '../controller/surveys.ctrl';

import surveyValid from '../validation/survey/survey.valid';

import auth from '../middleware/auth'

const router = Router()

router.get('/surveys', surveysCtrl.surveys)
router.get('/mysurveys', auth, surveysCtrl.mySurveys)
router.get('/surveys/:id', auth, surveysCtrl.survey)
router.post('/surveys', auth, surveyValid, surveysCtrl.createSurvey)
router.delete('/surveys/:id', auth, surveysCtrl.removeSurvey)
router.patch('/surveys/recommend/:id', auth, surveysCtrl.recommendSurvey)

export default router