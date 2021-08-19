import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {

        this.auth = auth();
        this.db = firestore();
        this.storage = storage();
    }

    
    // ALL QUERY

      //list users

      queryUsers = () => this.db.collection("users");

      //add un user
  
      queryAddUser = (id,data) => this.db.collection("users").doc(id).set(data);

      queryOneUsers = (id) => this.db.collection("users").doc(id).get();


    //END QUERY



}

export default Firebase;


