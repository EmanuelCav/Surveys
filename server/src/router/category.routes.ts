import { Router } from "express";

import * as categoryCtrl from '../controller/category.ctrl';

import categoryValid from '../middleware/validation/validation/category.valid';

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/categories', categoryCtrl.categories)
router.get('/categories/:id/surveys', auth, categoryCtrl.categoriesSurvey)
router.post('/categories', categoryValid, categoryCtrl.createCategory)
router.delete('/categories/:id', [auth, admin], categoryCtrl.removeCategory)
router.put('/categories/:id', auth, categoryCtrl.selectCategory)

export default router