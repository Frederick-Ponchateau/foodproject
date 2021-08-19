import {StyleSheet} from 'react-native';
import color from '../../assets/color';

const Styles = StyleSheet.create(
    {
        content:{
            flex:1,
            padding:20
        },
        headerContent:{ 
            flex:0.6,
           
        },
        bottomContent:{
            flex:0.4,
           
            justifyContent:"flex-end"
        },
        btnInscription:{
            marginBottom:20,
            backgroundColor:color.Orange1,
            borderRadius:15,
            height:50,
            fontWeight:"bold"
        },
        btnConnexion:{
            marginBottom:20,
            backgroundColor:color.Blanc,
            borderRadius:15,
            height:50,
            fontWeight:"bold"
        },
        linearGradient:{
            flex:1
        },
        image:{
            flex: 0.8,
            justifyContent: "center",
        },
        imageStyle:{
            borderBottomLeftRadius:5,
            borderBottomRightRadius:195,
        },
        title:{
            textAlign:"center",
            marginTop:20,
            color:color.txtColorTitle,
            fontSize:40,
            fontFamily:"Charm-Regular",
            
        }



    }
)
export default Styles