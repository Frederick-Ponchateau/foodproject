import {ADDPANIER,DELETEPANIER } from "../Actions/types";

const initState = [];

const paniers = (state = initState, action) => {
    //console.log("state3: ",state)

    switch (action.type) {

        
        case ADDPANIER:

            let list = action.payload;
        
            const test = state.filter(ele => ele.idProd == list.idProd)
            if(test.length>0){
                // list= {...list,quantite:list.quantite+test[0].quantite}
              
                // return [...state,list] ;
                //*-*-*-*-**-
                const newList = state.map(ele=> {
                    if(ele.idProd == list.idProd){

                        return {...ele,quantite:list.quantite+ele.quantite}

                    }else{
                        return ele
                    }
                })
                return newList
            }else{
                //console.log("object",[action.payload])
                return [...state,action.payload] ;

            }
            break;

        case DELETEPANIER:
                let newTab = state.filter(ele => ele.idProd != action.payload)
            return newTab
            break;

        default:
            return state
            break;
    }
    
    
}

export default paniers;
