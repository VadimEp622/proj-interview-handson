import { httpService } from './http.service.js'

const STORAGE_KEY = 'info'

export const infoService = {
    query,
    getById,
    remove,
    save
}

async function query() {
    return httpService.get(STORAGE_KEY)
}

async function getById(Id) {
    return httpService.get(`${STORAGE_KEY}/${Id}`)
}

async function remove(Id) {
    return httpService.delete(`${STORAGE_KEY}/${Id}`)
}

async function save(info) {
    savedInfo = await httpService.post(`${STORAGE_KEY}`, info)
    return savedInfo
}