import { Router } from "express";

import * as countryCtrl from '../controller/country.ctrl';

import auth from '../middleware/auth/auth'
import admin from '../middleware/auth/admin'

const router = Router()

router.get('/countries', countryCtrl.countries)
router.post('/countries', [auth, admin], countryCtrl.setCountries)
router.delete('/countries/:id', [auth, admin], countryCtrl.removeCountry)

export default router