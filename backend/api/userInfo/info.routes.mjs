import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.mjs'
import { getUserInfo, getUsers, deleteUserInfo, updateUserInfo } from './info.controller.mjs'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUserInfo)
router.put('/:id', requireAuth, updateUserInfo)
router.delete('/:id', requireAuth, deleteUserInfo)

export const userRoutes = router
