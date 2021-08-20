import {AFF_MENU,ADD_MENU } from "../Actions/types";

const initStateExemple = {lstMenu:[]}

const menu = (state = initStateExemple, action) => {
   // console.log(action)

    switch (action.type) {

        
        case AFF_MENU:
            return action.payload ;
            break;
        case ADD_MENU:
          
                console.log("action.payload: ",{...state,lstMenu:{...action.payload}})
            return {...state,lstMenu:[...action.payload]};
           
            break;
        default:
            return state
            break;
    }
    
    
}

export default menu;
