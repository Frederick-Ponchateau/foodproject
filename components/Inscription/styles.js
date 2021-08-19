import {StyleSheet} from 'react-native';

import color from '../../assets/color';

const Styles = StyleSheet.create(
    {
        content:{
            flex:1,
            padding:20,
        },
        header:{
          
            alignItems:'center',
        },
        textTitle:{
            marginTop:15,
            textAlign:"center",
            fontSize:36,
            color:color.txtColorTitle,
            fontFamily:"Charm-Regular"


        },
        bottom:{
            flexDirection:'column-reverse',
            flex:1
        },
        btnConnexion1:{
           
            backgroundColor:color.Blanc,
            borderRadius:15,
            height:50,
            fontWeight:"bold",

        },
        input:{
            borderColor:color.Blanc,
        },
        inputVue:{
            
            justifyContent:"flex-start"

        },
        txtPass:{
            color:color.Blanc,
            textAlign:"right",
            fontFamily:"Charm-Regular",
            fontSize:18            
        }


    })
    export default Styles