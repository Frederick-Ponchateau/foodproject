import { combineReducers } from "redux";
import menu from "./menu";
import produit from "./produit";
import users from "./users";
import paniers from "./panier";



export default combineReducers({menu,produit,users,paniers});