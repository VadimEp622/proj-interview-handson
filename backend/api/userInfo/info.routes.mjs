import express from 'express'
// import { requireAuth } from '../../middlewares/requireAuth.middleware.mjs'
import { getUserInfo, addUserInfo } from './info.controller.mjs'

const router = express.Router()

router.get('/:eMail', getUserInfo)
router.post('/', addUserInfo)


// router.get('/', getAllUsersInfo)
// router.put('/:id', requireAuth, updateUserInfo)
// router.delete('/:id', requireAuth, deleteUserInfo)
// router.put('/:id', updateUserInfo)
// router.delete('/:id', removeInfoByEmail)

export const infoRoutes = router
