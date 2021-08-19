import {AFF_PRODUIT,AFF_DETAIL} from './types'

export const afficheProduits = (payload) => ({
    type: AFF_PRODUIT,
    payload
})
export const afficheDetail = (payload) => ({
    type: AFF_DETAIL,
    payload
})

