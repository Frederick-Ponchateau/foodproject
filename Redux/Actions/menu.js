import {AFF_MENU,ADD_MENU} from './types'

export const afficheMenu = (payload) => ({
    type: AFF_MENU,
    payload
})
export const ajoutMenu = (payload) => ({
    type: ADD_MENU,
    payload
})


