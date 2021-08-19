import React,{useState,useEffect,useContext} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {useSelector,useDispatch} from 'react-redux';
import { FirebaseContext } from './FirebaseContext';

import {infosUser,infosUserCollection} from './Redux/Actions/users';

import Welcome from './components/Welcome';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Menu from './components/Menu';
import Detail from './components/Detail';
import Compte from './components/Compte';
import Panier from './components/Panier';

const Stack = createStackNavigator();
export default function App() {
  const {auth,queryOneUsers} = useContext(FirebaseContext);
  const dispatch = useDispatch()
  const [verifUser, setVerifUser] = useState(false)
  
  const {users} = useSelector(state => state)
  ///console.log("users : ",users)

  // Handle user state changes
  const onAuthStateChanged = async(user) => {

    if(user){
     await dispatch(infosUser({userInfo:user}))
    const infos = queryOneUsers(user.uid).then(async documentSnapshot => {
      console.log('User exists: ', documentSnapshot.exists);
      if (documentSnapshot.exists) {
        await dispatch(infosUserCollection({information:documentSnapshot.data()}))
        setVerifUser(documentSnapshot.exists)
        //console.log('User data: ', documentSnapshot.data());
      }else{
        setVerifUser(false);

      }
    });
    }else{
      setVerifUser(false);
    }
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);




  return (
    <NavigationContainer>
     {!verifUser? <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen
          name="Home"
          component={Welcome}
        />
        <Stack.Screen 
          name="Connexion"
          component={Connexion} 
        />
        <Stack.Screen 
          name="Inscription"
          component={Inscription} 
        />
        </Stack.Navigator>
        
        :
        <Stack.Navigator screenOptions={{headerShown:false}}>
      

        <Stack.Screen 
          name="Menu"
          component={Menu} 
        />
        <Stack.Screen 
          name="Detail"
          component={Detail} 
        />
        <Stack.Screen 
          name="Compte"
          component={Compte} 
        />
        <Stack.Screen 
          name="Panier"
          component={Panier} 
        />
        </Stack.Navigator>}
    </NavigationContainer>
  )
}
