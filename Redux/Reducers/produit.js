import { AFF_PRODUIT,AFF_DETAIL,ADD_PRODUIT} from "../Actions/types";

const initStateExemple = {lstProduit:[]}

const produit = (state = initStateExemple, action) => {
    //console.log("state :  ",state)

    switch (action.type) {

        case AFF_PRODUIT:
            console.log("action.payload: ",action.payload)
            // let test= state.lstProduit;
            // if(test !== ""){
            //     if(action.payload !== ""){
                
            //         test = initStateExemple.lstProduit.filter(element => element.idMenu == action.payload)
            //     }
            // }else{
            //     test= [{id:0,nom:"Pas de menu disponible"}]

            // }
            
            // return {lstProduit:[...test]} ;
            return {...state,lstProduit:[...action.payload]};
            break;
        case ADD_PRODUIT:
            
          //  console.log("payload : ", action.payload);
            return {...state,lstProduit:[...action.payload]};

            break;
        case AFF_DETAIL:
            const produit = initStateExemple.lstProduit.filter(element => element.id == action.payload)
            return {...state,produit:[...produit]} ;
            break;
        default:
            return state
            break;
    }
    
    
}

export default produit;
