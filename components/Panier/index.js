import React,{useEffect,useState} from 'react';
import { View, Text,Image } from 'react-native';
import {Button,ListItem,Icon} from 'react-native-elements';
import {useDispatch,useSelector} from 'react-redux';


import Header from '../Header';
import Styles from './styles';
//import List from './List'; './List';
import {afficheDetail} from '../../Redux/Actions/produit';
import {deleteProduit} from '../../Redux/Actions/panier';

const Total = ()=>{
    const {paniers,produit}= useSelector(state => state);
    let totalI=0;
    const tt = paniers.map(element =>{
        const prod = produit.lstProduit.filter(ele => ele.id == element.idProd);
        totalI = totalI+prod[0].price*element.quantite;
       
    })

    return (
        <Text>{totalI}</Text>
    )
}

const index = () => {

    const dispatch = useDispatch();
    const {paniers,produit}= useSelector(state => state);
    
    
    const addPanier = () => {
        
        // if(quantite>0){
        //     dispatch(ajoutProduit({id: users.userInfo.uid, idProd:produit.produit[0].id,quantite}))
        // }
    }
    const deleteProd = (id) => {
        dispatch(deleteProduit(id));
    }
    
    return (
        <View style={Styles.vuePricipal} >
            <Header/>
         <View style={Styles.content} >

        {
            
            paniers.map((ele,id)=> {
                
               
               const items = produit.lstProduit.filter(element => element.id == ele.idProd);
                const result =items[0].price*ele.quantite;
               return(
                    <ListItem.Swipeable
                        
                       
                        rightContent={
                            <Button
                            title="Delete"
                            icon={{ name: 'delete', color: 'white' }}
                            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                            onPress={()=>deleteProd(ele.idProd)}
                            />
                        }
                        key={id} bottomDivider
                    >
                    <Icon name="shopping-basket" />
                    <ListItem.Content>
                        <ListItem.Title>{items[0].nom}</ListItem.Title>
                        <ListItem.Title>{result} €</ListItem.Title>
                        <ListItem.Title>{ele.quantite}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem.Swipeable>
                )
            })
        }
           <Total/>
        </View>
            <View style={Styles.vueButton}>
                <Button buttonStyle={Styles.button} title={"Valider"} onPress={addPanier} />
            </View>
        </View>
    )
}

export default index
