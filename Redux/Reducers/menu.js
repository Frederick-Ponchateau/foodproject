import {AFF_MENU } from "../Actions/types";

const initStateExemple = {lstMenu:[{id:0,nom:"Tout"},{id:1,nom:"Pizza"},{id:2,nom:"Burger"},{id:3,nom:"Salade"},{id:4,nom:"Tacos"}]}

const menu = (state = initStateExemple, action) => {
   // console.log(action)

    switch (action.type) {

        
        case AFF_MENU:
            return action.payload ;
            break;
        default:
            return state
            break;
    }
    
    
}

export default menu;
