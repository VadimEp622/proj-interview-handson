import { infoService } from './info.service.mjs'
import { logger } from '../../services/logger.service.mjs'

export async function getUserInfo(req, res) {
    const eMail = req.params.eMail
    console.log('eMail', eMail)
    try {
        const userInfo = await infoService.getUserInfoByMail(eMail)
        res.send(userInfo)
    } catch (error) {
        logger.error('Failed to get user information', error)
        res.status(400).send({ error: 'Failed to get user information' })
    }
}

export async function addUserInfo(req, res) {

    try {
        const newUserInfo = req.body
        console.log('newUserInfo', newUserInfo)
        const userInfos = await infoService.addUserInfo(newUserInfo)
        res.send(userInfos)
    } catch (error) {
        logger.error('Failed to add user information', error)
        res.status(400).send({ error: 'Failed to add user information' })
    }
}


// export async function getAllUsersInfo(req, res) {
//     try {
//         const userInfos = await infoService.getUserInfos()
//         res.send(userInfos)
//     } catch (error) {
//         logger.error('Failed to get all users information', error)
//         res.status(400).send({ error: 'Failed to get all users information' })
//     }
// }



// export async function removeInfoByEmail(req, res) {
//     try {
//         const email = req.params.email
//         console.log('email', email)
//         const userInfos = await infoService.removeUserInfoByEmail(email)
//         res.send(userInfos)
//     } catch (error) {
//         logger.error('Failed to remove user information', error)
//         res.status(400).send({ error: 'Failed to remove user information' })
//     }
// }
