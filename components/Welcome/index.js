import React from 'react';
import {ImageBackground, View,Text  } from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/color';
import Styles from './styles';

const index = ({navigation}) => {
    return (
        <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={[colors.bgPublic, colors.bgGradient]} style={{flex:1}}>
            <ImageBackground source={require("../../assets/images/FoodApp2.jpg")} imageStyle={Styles.imageStyle} style={Styles.image}/>
        <View style={Styles.content} >
            <View style={Styles.headerContent} >
            <Text style={Styles.title}  >PRET A VOUS REGALEZ ?</Text>
        </View>
        <View style={Styles.bottomContent} >
            <Button buttonStyle={Styles.btnConnexion}
                    title="CONNEXION" 
                    titleStyle={{color:colors.txtBtnConnexion}}
                    onPress={() =>
                        navigation.navigate('Connexion')
                    }
            />
            <Button buttonStyle={Styles.btnInscription} 
                    title="INSCRIPTION"    
                    onPress={() =>
                        navigation.navigate('Inscription')
                    }
            />
        </View>
        </View>
        </LinearGradient>
    )
}

export default index
