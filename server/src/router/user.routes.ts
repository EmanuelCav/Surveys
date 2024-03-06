import { Router } from "express";

import * as userCtrl from '../controller/users.ctrl';

import loginValid from '../middleware/validation/validation/login.valid';
import registerValid from '../middleware/validation/validation/register.valid';

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:id', userCtrl.user)
router.post('/register', registerValid, userCtrl.register)
router.post('/login', loginValid, userCtrl.login)
router.delete('/users/:id', auth, userCtrl.removeUser)
router.patch('/users/follow/:id', auth, userCtrl.followUser)
router.put('/users/status', userCtrl.changeStatus)

export default router