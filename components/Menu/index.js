import React from 'react';
import { View, Text , TouchableOpacity} from 'react-native';
import { Icon} from 'react-native-elements';
import colors  from '../../assets/color';
import {useSelector} from 'react-redux';

import Menu from './menu';
import Produits from './produit';
import Styles from './styles';

const index = ({navigation}) => {
    const {users} = useSelector(state => state)
    const nom = users.information.nom;
    
    return (
        <View style={Styles.vuePricipal} >
            <View style={Styles.vueHeader} >
                <TouchableOpacity onPress={()=>navigation.navigate('Compte')}>
                    <Icon  type={"font-awesome"} name={"bars"} size={40} style={Styles.icon} color={colors.Blanc}/>
                </TouchableOpacity>
            </View>
            <View style={Styles.content} >
                <Text style={Styles.txtTitle}>BONJOUR {nom}</Text>
                <Text style={Styles.txtSubTitle}>vous mangez quoi aujourd'hui ?</Text>
               <Menu />
            </View>
            <View style={Styles.VueListe}>
                <Produits/>
            </View>
        </View>
    )
}

export default index
