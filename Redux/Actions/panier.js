import {ADDPANIER,DELETEPANIER} from './types'

export const ajoutProduit = (payload) => ({
    type: ADDPANIER,
    payload
})
export const deleteProduit = (payload) => ({
    type: DELETEPANIER,
    payload
})


