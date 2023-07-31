import { Router } from "express";

import * as userCtrl from '../controller/users.ctrl';

import loginValid from '../validation/user/login.valid';
import registerValid from '../validation/user/register.valid';

import auth from '../middleware/auth'

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:id', userCtrl.user)
router.post('/register', registerValid, userCtrl.register)
router.post('/login', loginValid, userCtrl.login)
router.delete('/users/:id', userCtrl.removeUser)
router.patch('/users/follow/:id', auth, userCtrl.followUser)

export default router