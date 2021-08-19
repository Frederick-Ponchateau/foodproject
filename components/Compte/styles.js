import { StyleSheet } from "react-native";
import color from '../../assets/color';

const Style = StyleSheet.create({
    vuePricipal:{
        flex:1,
        backgroundColor:color.bgPrivate,
        padding:25
    },
   
    content:{
        marginTop:35,
        // backgroundColor:color.bgCard,
        width:"100%",
        borderRadius:15,
        paddingBottom:15,
        alignItems:"center",
        
    },
    textTitle:{
        fontFamily:"Charm-Bold",
        fontSize:35,
        marginTop:25,
        textTransform:"uppercase"
    },
    textSubTitle:{
        
        fontSize:25,
        marginTop:25,
        color:color.Blanc,
        textTransform:"uppercase"

    },
    buttonChamp:{
        borderBottomColor:"#fff",
        borderBottomWidth:1,
        flexDirection:"row",
        width:"100%",
       alignItems:"flex-end",
       justifyContent:"space-between",
    },
    button:{
        backgroundColor:color.Orange1,
        borderRadius:15,
        height:50,
        width:"100%",
        marginTop:25,
    }

});
export default Style;