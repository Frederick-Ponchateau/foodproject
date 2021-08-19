import React,{useContext} from 'react';
import { View, Text, Pressable} from 'react-native';
import { Avatar,Icon,Button  } from 'react-native-elements';
import {useSelector,useDispatch} from 'react-redux';

import Styles from './styles';
import Header from '../Header';
import colors from '../../assets/color';
import {FirebaseContext} from '../../FirebaseContext';
import {infosUserCollection} from '../../Redux/Actions/users';


const index = ({navigation}) => {
    const {auth} = useContext(FirebaseContext);
    const {users} = useSelector(state => state);
    const dispatch = useDispatch();

    const nom = users.information.nom;

    const deconnexion = () => {
        auth.signOut().then(async () => {
            await dispatch(infosUserCollection({information:"null"}))
           // await navigation.navigate('Home');

        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    
    return (
        <View style={Styles.vuePricipal} >
            <Header/>
            <View style={Styles.content} >
                <Avatar
                    size={250}
                    rounded
                    source={{
                        uri:
                        'https://images-eu.ssl-images-amazon.com/images/I/514LtkpBtNL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg',
                    }}
                />
                <Text style={Styles.textTitle}>{nom}</Text>
                <Pressable style={Styles.buttonChamp}>
                    <Text style={Styles.textSubTitle}>MES COMMANDES</Text>
                    <Icon  type={"font-awesome"} name={"chevron-right"} size={25} style={Styles.icon1} color={colors.Blanc}/>
                </Pressable>
            </View>
                <Button buttonStyle={Styles.button} onPress={deconnexion} title={"Déconnexion"} />
        </View>
    )
}

export default index
