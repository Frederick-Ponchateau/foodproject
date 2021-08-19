import React,{useContext,useState} from 'react';
import { View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Icon,Input,Button } from 'react-native-elements';
import { FirebaseContext } from '../../FirebaseContext';


import Styles from './styles';
import colors from '../../assets/color';
import { color } from 'react-native-reanimated';



const index = ({navigation}) => {
    const {auth,queryAddUser,queryUsers} = useContext(FirebaseContext);
    //console.log(queryAddUser,queryUsers);
    const [email, setEmail] = useState("essaipro6@test.com");

    const [password, setPassword] = useState("123456");

    const [confPassword, setConfPassword] = useState("123456");

    const [nom, setNom] = useState("essaipro6");

    const inscription = async() => {
        try {
            if(password == confPassword){

                //console.log(email,password,nom);
                
                //queryAddUser({email:user.email,nom:user.nom})
                
                await auth.createUserWithEmailAndPassword(email,password).then(async (userCredential) => {
                    var user = userCredential.user;
                    var uid = user.uid;
                    console.log(user)
                   await queryAddUser(uid,{email:user.email,nom:nom})
                   
                    
                }).catch(err => {
                    
                    if (err.code === 'auth/email-already-in-use') {
                        
                        console.log('Cette adresse mail est déjà utilisée !');
                        
                    }
                    
                    if (err.code === 'auth/invalid-email') {
                        
                        console.log("Cette adresse mail n'est pas valide");
                        
                    }
                    
                    console.error(err);
                })
            }

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
                    <Text style={Styles.textTitle}>INSCRIVEZ VOUS !</Text>
                </View>
                    <View style={Styles.inputVue}>
                        <Input 
                            inputContainerStyle={Styles.input} 
                            onChangeText={setNom} 
                            placeholder='PSEUDO'
                            value={nom}
                            placeholderTextColor={colors.Blanc}  
                            inputStyle={{color:colors.Blanc}}/>
                        <Input 
                            inputContainerStyle={Styles.input} 
                            onChangeText={setEmail} 
                            placeholder='EMAIL' 
                            value={email}
                            placeholderTextColor={colors.Blanc}  
                            inputStyle={{color:colors.Blanc}}
                        />
                        <Input 
                            inputContainerStyle={Styles.input} 
                            secureTextEntry={true}  
                            onChangeText={setPassword} 
                            value={password}
                            placeholder='MOT DE PASSE' 
                            placeholderTextColor={colors.Blanc} 
                            inputStyle={{color:colors.Blanc}} 
                        />
                        <Input 
                            inputContainerStyle={Styles.input} 
                            secureTextEntry={true} 
                            onChangeText={setConfPassword}
                            value={confPassword}
                            placeholder='CONFIRMER MOT DE PASSE' 
                            placeholderTextColor={colors.Blanc} 
                            inputStyle={{color:colors.Blanc}} 
                        
                        />
                    </View>
                    <View style={Styles.bottom}>
                        <Button buttonStyle={Styles.btnConnexion1}
                                title="INSCRIPTION" 
                                titleStyle={{color:colors.txtBtnConnexion}}
                                onPress={
                                   inscription
                                }
                        /> 
                    </View>
            </View>
        </LinearGradient>
    )
}

export default index
