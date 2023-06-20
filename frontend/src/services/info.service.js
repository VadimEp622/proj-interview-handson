import { httpService } from './http.service.js'

const STORAGE_KEY = 'info'

export const infoService = {
    query,
    getByMail,
    remove,
    save
}

async function query() {
    return httpService.get(STORAGE_KEY)
}

async function getByMail(eMail) {
    return httpService.get(`${STORAGE_KEY}/${eMail}`)
}

async function remove(eMail) {
    return httpService.delete(`${STORAGE_KEY}/${eMail}`)
}

async function save(info) {
    console.log(info)
    const savedInfo = await httpService.post(`${STORAGE_KEY}`, info)
    return savedInfo
}