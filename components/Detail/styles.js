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
        
    },
    image:{
        width:"100%",
        height:"60%",
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    textPrimary:{
        fontSize:30,
        fontWeight:"bold",
        paddingTop:35,
        paddingLeft:35,
    },
    textPrice:{
        fontSize: 35,
        color:color.Orange1,
        fontWeight:"bold",
        paddingRight:35,
        alignContent:"flex-start",
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
    inputNumeric:{
        flex:1,
        flexDirection:"row",
        paddingTop:35,
        paddingLeft:35,
        alignSelf:"auto"
    }
    



});
export default Style;