import { AFF_PRODUIT,AFF_DETAIL} from "../Actions/types";

const initStateExemple = {lstProduit:[
    {id:1,idMenu:1,nom:"Pizza Pépéroni",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3oQYr6C1Cv9QVh2wvvZFTb6ltqo7JXCx6Q&usqp=CAU",price:"10"},
    {id:6,idMenu:2,nom:"Hamburger",image:"../../assets/images/5.png",price:"13"},
    {id:3,idMenu:4,nom:"Tacos",image:"../../assets/images/4.png",price:"16"},
    {id:4,idMenu:2,nom:"Cheeseburger",image:"../../assets/images/8.png",price:"15"}]}

const produit = (state = initStateExemple, action) => {
    //console.log(action)

    switch (action.type) {

        case AFF_PRODUIT:
            let test= initStateExemple.lstProduit;
            if(action.payload !== 0){
                
                test = initStateExemple.lstProduit.filter(element => element.idMenu == action.payload)
                if(test == ""){
                    test= [{id:0,nom:"Pas de menu disponible"}]
                }
            }
            
            return {lstProduit:[...test]} ;
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
