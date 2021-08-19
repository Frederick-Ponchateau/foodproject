import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../../assets/color';
import {afficheProduits} from '../../Redux/Actions/produit'
import { View } from "react-native";



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.nom}</Text>
  </TouchableOpacity>
  
);

const menu = () => {
  const [selectedId, setSelectedId] = useState(null);
  const {menu,produit} = useSelector(state => state)
  const dispatch = useDispatch()
  const List= menu.lstMenu;
  const ListProduit = produit.lstProduit;
  

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? colors.Orange1 : colors.Orange2;
    const color = item.id === selectedId ? 'white' : 'black';
    const selectMenu = (id) =>{
      setSelectedId(id)
      dispatch(afficheProduits(id))
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
        data={List}
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