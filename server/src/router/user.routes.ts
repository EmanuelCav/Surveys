import { Router } from "express";

import * as userCtrl from '../controller/users.ctrl';

import loginValid from '../middleware/validation/validation/login.valid';
import registerValid from '../middleware/validation/validation/register.valid';
import profileValid from "../middleware/validation/validation/profile.valid";

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:id', auth, userCtrl.user)
router.post('/register', registerValid, userCtrl.register)
router.post('/login', loginValid, userCtrl.login)
router.delete('/users/:id', auth, userCtrl.removeUser)
router.patch('/users/follow/:id', auth, userCtrl.followUser)
router.put('/users/:id/status', userCtrl.changeStatus)
router.put('/users/profile', profileValid, auth, userCtrl.changeProfile)

export default router