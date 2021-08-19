import React,{useState} from 'react';
import { SafeAreaView, View, FlatList,Image, StyleSheet, Text ,Pressable,TouchableOpacity,} from 'react-native';
import { Icon} from 'react-native-elements';
import {useSelector,useDispatch} from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import colors from '../../assets/color';
import { afficheDetail } from '../../Redux/Actions/produit';



const Item = ({items}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const images = items.image;
  const detail = async(id) => {
    
     dispatch(afficheDetail(id));
    await navigation.navigate("Detail");
  }
  
  return(
      <TouchableOpacity onPress={()=>detail(items.id)} >
    <View style={styles.item}>
      {items&&<Image style={styles.image} source={require('../../assets/images/7.png')} /> }

          <Text style={styles.title}>{items.nom}</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.subtitle}>{items.price} €</Text>
          <Pressable onPress={()=>console.log("object")} style={styles.pressable}>
              <Icon style={styles.icon} size={25} color={colors.Orange1} type="font-awesome" name="plus-circle" />
          </Pressable>
    </View>
    </View>
  </TouchableOpacity>
);}

const produit = () => {
const {produit} = useSelector(state => state)
const lstProduit = produit.lstProduit
  const renderItem = ({ item }) => {
    return(
    
    <Item items={item} />
    
  )};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={lstProduit}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
  item: {
    backgroundColor:colors.bgCard ,
    height:220,
    width:175,
    marginRight:20,
    marginBottom:20,
    borderRadius:15,
    elevation:5
  },
  title: {
    fontSize: 20,
    marginLeft:5,
    fontWeight:"bold",
  },
  image:{
    flex:1,
    width:"100%",
    resizeMode:'center'
  },
  subtitle:{
    margin:15,
    fontWeight:"bold",
    fontSize: 18,
    color:colors.Orange1
  },
  icon:{
      textAlign:'center',
  },
  pressable:{
    justifyContent: "center", 
    alignItems: "center" ,
    flex:1
  }
  
});

export default produit;