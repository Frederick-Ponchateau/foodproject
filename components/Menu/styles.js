import { StyleSheet } from "react-native";
import color from '../../assets/color';

const Style = StyleSheet.create({
    vuePricipal:{
        flex:1,
        backgroundColor:color.bgPrivate,
        padding:20,
        flexDirection:"column",
        
    },
    vueHeader:{
       alignItems:"flex-end",
    },
    VueListe:{
        flex:3,
        
        marginTop:15 
    },
    icon:{
        flexDirection:"column",
        alignItems:"flex-end",
    },
    content:{
        height:160,
    
                
    },
    txtTitle:{
        color:color.Blanc,
        fontSize:25,
        fontFamily:"Charm-Regular",
        textTransform:"uppercase",
    },
    txtSubTitle:{
        color:color.Blanc,
        fontSize:18,
        fontFamily:"Charm-Regular",
        textTransform:"capitalize",

    }


});
export default Style;