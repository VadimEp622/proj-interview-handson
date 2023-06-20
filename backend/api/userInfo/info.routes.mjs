import express from 'express'
// import { requireAuth } from '../../middlewares/requireAuth.middleware.mjs'
import { getUserInfo, getAllUsersInfo, addUserInfo, removeInfoByEmail, } from './info.controller.mjs'

const router = express.Router()

router.get('/', getAllUsersInfo)
router.get('/:id', getUserInfo)
// router.put('/:id', requireAuth, updateUserInfo)
// router.delete('/:id', requireAuth, deleteUserInfo)
// router.put('/:id', updateUserInfo)
router.post('/', addUserInfo)
router.delete('/:id', removeInfoByEmail)

export const infoRoutes = router
