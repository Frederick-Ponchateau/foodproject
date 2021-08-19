import {INFOS_USER,INFOS_USER_FB } from "../Actions/types";

const initStateExemple = {userInfo:[]};

const users = (state = initStateExemple, action) => {
    //console.log("state : ",state)

    switch (action.type) {

        
        case INFOS_USER:
            //console.log("action.payload1 : ",action.payload)
            return {...state,...action.payload} ;
            break;
        case INFOS_USER_FB:
            //console.log("action.payload2 : ",action.payload)
            return {...state,...action.payload} ;
            break;

        default:
            return state
            break;
    }
    
    
}

export default users;
