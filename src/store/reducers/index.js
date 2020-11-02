import { combineReducers } from 'redux';

import products from "./products";
import info from "./info";


//Combina todos os reducers em um so
export default combineReducers({
    products,
    info
});