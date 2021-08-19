import { StyleSheet } from "react-native";
import color from '../../assets/color';

const Style = StyleSheet.create({
    vuePricipal:{
        flex:1,
        backgroundColor:color.bgPrivate,
        padding:20,
    },
   
    content:{
        marginTop:20,
        backgroundColor:color.bgCard,
        width:"100%",
        borderRadius:15,
        paddingBottom:15,
        flex:1
        
    },
    
    button:{
        backgroundColor:color.Orange1,
        borderRadius:15,
        height:50,
      
    },
    vueButton:{
        flexDirection:"column-reverse",
        flex:1
    },
    
    



});
export default Style;