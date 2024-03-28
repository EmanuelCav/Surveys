import { Router } from "express";

import * as surveysCtrl from '../controller/surveys.ctrl';

import createValid from '../middleware/validation/validation/create.valid';

import auth from '../middleware/auth/auth'
import permission from "../middleware/auth/permission";

const router = Router()

router.get('/surveys', permission, surveysCtrl.surveys)
router.get('/surveys/follow', auth, surveysCtrl.surveysFollow)
router.get('/surveys/:id', auth, surveysCtrl.survey)
router.get('/search/surveys', permission, surveysCtrl.surveySearch)
router.post('/surveys', auth, createValid, surveysCtrl.createSurvey)
router.delete('/surveys/:id', auth, surveysCtrl.removeSurvey)
router.patch('/surveys/:id', auth, surveysCtrl.recommendSurvey)
router.put('/surveys/:id', auth, surveysCtrl.changeState)

export default router