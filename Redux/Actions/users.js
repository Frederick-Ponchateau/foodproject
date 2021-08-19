import {INFOS_USER,INFOS_USER_FB} from './types'

export const infosUser = (payload) => ({
    type: INFOS_USER,
    payload
})
export const infosUserCollection = (payload) => ({
    type: INFOS_USER_FB,
    payload
})

