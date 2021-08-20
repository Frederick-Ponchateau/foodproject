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

      // one users

      queryOneUsers = (id) => this.db.collection("users").doc(id).get();

      // list menu
      queryMenus = ()=> this.db.collection("menu");

      /************************
       * @returns list Produit
       ************************/
      queryProduits = ()=> this.db.collection("produit");

      /**
       * 
       * @param {menu} id 
       * @returns 
       */
      queryProduitsMenu = (id)=> this.db.collection("produit")
      .where("idMenu", "==", id)
    //END QUERY



}

export default Firebase;


