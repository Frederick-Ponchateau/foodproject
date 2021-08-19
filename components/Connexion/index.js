import React,{useContext,useEffect,useState} from 'react';
import { View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon,Input,Button } from 'react-native-elements';
import {FirebaseContext} from '../../FirebaseContext';


import Styles from './styles';
import colors from '../../assets/color';
import { color } from 'react-native-reanimated';



const index = ({navigation}) => {
    const {auth} = useContext(FirebaseContext);
    const [email, setEmail] = useState("essaipro6@test.com");

    const [password, setPassword] = useState("123456");
    const user = auth.currentUser;
    if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    navigation.navigate('Menu');

    }
    
    const connexion = async () => {

        try {

            console.log(auth);

            await auth.signInWithEmailAndPassword(email,password).then(()=>{

              
            }).catch((error) => {
                // An error happened.
                console.log(error)
              });

        } catch (error) {


            console.log(error);

        }

    }
    return (
        <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={[colors.bgPublic, colors.bgGradient]} style={{flex:1}}>
            <View style={Styles.content}>
                <View style={Styles.header}>
                    <Icon
                        name='user-circle'
                        type='font-awesome'
                        size={100}
                        color={colors.Blanc}
                    />
                    <Text style={Styles.textTitle}>CONNECTEZ VOUS !</Text>
                </View>
                    <View style={Styles.inputVue}>
                        <Input 
                            inputContainerStyle={Styles.input} 
                            onChangeText={setEmail}
                            value={email} 
                            placeholder='EMAIL' 
                            placeholderTextColor={colors.Blanc}  
                            inputStyle={{color:colors.Blanc}}
                        />
                        <Input 
                            inputContainerStyle={Styles.input} 
                            placeholder='MOT DE PASSE' 
                            placeholderTextColor={colors.Blanc} 
                            inputStyle={{color:colors.Blanc}} 
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            value={password}
                        />
                        <Text style={Styles.txtPass} onPress={()=>console.log("object")} >Mot De Passe Oublié</Text>
                    </View>
                    <View style={Styles.bottom}>
                        <Button buttonStyle={Styles.btnConnexion1}
                                title="CONNEXION" 
                                titleStyle={{color:colors.txtBtnConnexion}}
                                onPress={connexion
                                }
                        /> 
                    </View>
            </View>
        </LinearGradient>
    )
}

export default index
