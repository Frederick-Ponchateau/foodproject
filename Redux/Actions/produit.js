import {AFF_PRODUIT,AFF_DETAIL,ADD_PRODUIT} from './types'

export const afficheProduits = (payload) => ({
    type: AFF_PRODUIT,
    payload
})
export const ajoutProduits = (payload) => ({
    type: ADD_PRODUIT,
    payload
})
export const afficheDetail = (payload) => ({
    type: AFF_DETAIL,
    payload
})

