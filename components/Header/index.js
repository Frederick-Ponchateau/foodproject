import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';
import colors  from '../../assets/color';
const index = () => {
    const navigation = useNavigation()
    return (
        <View style={Styles.vueHeader} >
            <Icon onPress={()=>navigation.goBack()} type={"font-awesome"} name={"chevron-left"} size={35} style={Styles.icon1} color={colors.Blanc}/>
            <Icon onPress={()=> navigation.navigate('Panier')} type={"font-awesome"} name={"shopping-cart"} size={35} style={Styles.icon} color={colors.Blanc}/>
            <Icon onPress={()=>navigation.navigate('Compte')} type={"font-awesome"} name={"bars"} size={35} style={Styles.icon} color={colors.Blanc}/>
        </View>
    )
}

export default index
