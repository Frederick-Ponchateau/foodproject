import React, { useState,useContext } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../../assets/color';
import {afficheProduits} from '../../Redux/Actions/produit'
import { View } from "react-native";
import { FirebaseContext } from '../../FirebaseContext';



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.nom}</Text>
  </TouchableOpacity>
  
);

const menu = () => {
  const [selectedId, setSelectedId] = useState(null);
  const {menu,produit} = useSelector(state => state)
  const dispatch = useDispatch()
  const {queryProduitsMenu} = useContext(FirebaseContext)
  const List= menu.lstMenu;
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? colors.Orange1 : colors.Orange2;
    const color = item.id === selectedId ? 'white' : 'black';
    /******************************************
     * 
     * @param {selection id menu } id
     * Envoi l'information dans le reduceur 
     * pour l'affichage des produits selon le menu 
     ******************************************/
    const selectMenu = (id) =>{
      setSelectedId(id)
      const tryProduct = queryProduitsMenu(id).get()
      .then(querySnapshot => {  console.log('Total menu: ', querySnapshot.size);
      let tabTps= [];
      querySnapshot.forEach(documentSnapshot => {
        if(documentSnapshot.exists){
          tabTps=[...tabTps,{id:documentSnapshot.id,...documentSnapshot.data()}];
        }
      });
      if(tabTps.length>0){
        //console.log("tabTps",tabTps);
        dispatch(afficheProduits(tabTps))
      }
    });
    }
    return (
    
      

      <Item
        item={item}
        onPress={() => selectMenu(item.id) }
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        />
      
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
      horizontal={true}
        data={menu.lstMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5,

  },
  item: {
    margin:10,
    height:35,
    borderRadius:15,
    width:100,
    elevation:10,
  },
  title: {
    textAlign:"center",
    margin:5,
    fontSize: 16,
  },
});

export default menu;