import React,{useEffect,useState} from 'react';
import { View, Text,Image } from 'react-native';
import { Icon,Button} from 'react-native-elements';
import {useDispatch,useSelector} from 'react-redux';
import NumericInput from 'react-native-numeric-input';


import colors  from '../../assets/color';
import Header from '../Header';
import Styles from './styles';
import {afficheDetail} from '../../Redux/Actions/produit';
import {ajoutProduit} from '../../Redux/Actions/panier';

const index = ({navigation}) => {

   
    const [quantite, setQuantite] = useState();
    const dispatch = useDispatch();
    const {produit,users} = useSelector(state => state);
    const detail = produit.produit[0];
    
    const addPanier = async () => {
        if(quantite>0){
            await dispatch(ajoutProduit({id: users.userInfo.uid, idProd:produit.produit[0].id,quantite}));
            await  navigation.navigate('Panier')
        }
    }

    return (
        <View style={Styles.vuePricipal} >
            <Header/>
            <View style={Styles.content} >
                <Image  style={Styles.image} source={require("../../assets/images/FoodApp2.jpg")} />
                <Text style={Styles.textPrimary}>{detail.nom}</Text>
                <View style={Styles.inputNumeric}>
                    <Text style={Styles.textPrice}>{detail.price} €</Text>
                    <NumericInput  
                        onChange={setQuantite} 
                        iconStyle={{ color: 'white' }} 
                        rightButtonBackgroundColor={colors.Orange1}
                        rounded 
                        minValue={1}
                        maxValue={10}	
                        leftButtonBackgroundColor={colors.Orange1}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}

                    />
                </View>
            </View>
            <View style={Styles.vueButton}>
                <Button buttonStyle={Styles.button} title={"COMMANDER"} onPress={addPanier } />
            </View>
        </View>
    )
}

export default index
