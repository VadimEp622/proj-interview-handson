import { dbService } from '../../services/db.service.mjs'
import { logger } from '../../services/logger.service.mjs'
import mongodb from 'mongodb'
const { ObjectId } = mongodb
import fs from 'fs'
const dataPath = './data/userInfo.json'
export const infoService = {
    // query,
    getUserInfo,
    removeUserInfoByEmail,
    getUserInfoByEmail,
    // getById,
    // getByUsername,
    // remove,
    // update,
    addUserInfo
}

async function getUserInfo() {
    try {
        const jsonData = await fs.promises.readFileSync(dataPath, 'utf8')
        const data = JSON.parse(jsonData)
        return data.userInfo
    } catch (error) {
        logger.error('Error reading user information:', error);
        throw new Error('Error reading user info: ' + err.message)
    }
}

async function addUserInfo(newUserInfo) {
    try {
        const jsonData = await fs.promises.readFileSync(dataPath, 'utf8')
        const data = JSON.parse(jsonData)
        data.userInfo.push(newUserInfo)
        await fs.promises.writeFile(dataPath, JSON.stringify(data))
        return data.userInfo
    } catch (error) {
        logger.error('Error adding user information:', error)
        throw new Error('Error adding user information')
    }
}

export async function removeUserInfoByEmail(email) {
    try {
        const jsonData = await fs.promises.readFile(dataPath, 'utf8')
        const data = JSON.parse(jsonData)

        data.userInfo = data.userInfo.filter(user => user.eMail !== email)

        await fs.promises.writeFile(dataPath, JSON.stringify(data))

        return data.userInfo
    } catch (error) {
        logger.error('Error removing user information:', error)
        throw new Error('Error removing user information')
    }
}

export async function getUserInfoByEmail(email) {
    try {
        const jsonData = await fs.promises.readFile(dataPath, 'utf8')
        const data = JSON.parse(jsonData)

        const userInfo = data.userInfo.find(user => user.eMail === email)

        if (!userInfo) {
            throw new Error('User not found')
        }

        return userInfo
    } catch (error) {
        logger.error('Error getting user information by email:', error)
        throw new Error('Error getting user information by email')
    }
}


// async function getById(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ _id: ObjectId(userId) })
//         delete user.password

//         user.givenReviews = await reviewService.query({ byUserId: ObjectId(user._id) })
//         user.givenReviews = user.givenReviews.map(review => {
//             delete review.byUser
//             return review
//         })

//         return user
//     } catch (err) {
//         logger.error(`while finding user by id: ${userId}`, err)
//         throw err
//     }
// }
// async function getByUsername(username) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ username })
//         return user
//     } catch (err) {
//         logger.error(`while finding user by username: ${username}`, err)
//         throw err
//     }
// }

// async function remove(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         await collection.deleteOne({ _id: ObjectId(userId) })
//     } catch (err) {
//         logger.error(`cannot remove user ${userId}`, err)
//         throw err
//     }
// }

// async function update(user) {
//     try {
//         // peek only updatable properties
//         const userToSave = {
//             _id: ObjectId(user._id), // needed for the returnd obj
//             fullname: user.fullname,
//             wishlist: user.wishlist,
//             trip: user.trip,
//             username: user.username
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.updateOne({ _id: userToSave._id }, { $set: userToSave })
//         return userToSave
//     } catch (err) {
//         logger.error(`cannot update user ${user._id}`, err)
//         throw err
//     }
// }

// async function query(filterBy = {}) {
//     const criteria = _buildCriteria(filterBy)
//     try {
//         const collection = await dbService.getCollection('user') // add collection
//         var users = await collection.find(criteria).toArray()
//         users = users.map(user => {
//             delete user.password
//             user.createdAt = ObjectId(user._id).getTimestamp()
//             return user
//         })
//         return users
//     } catch (err) {
//         logger.error('cannot find users', err)
//         throw err
//     }
// }


// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.txt) {
//         const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
//         criteria.$or = [
//             {
//                 username: txtCriteria
//             },
//             {
//                 fullname: txtCriteria
//             }
//         ]
//     }
//     if (filterBy.minBalance) {
//         criteria.score = { $gte: filterBy.minBalance }
//     }
//     return criteria
// }




