import { combineReducers } from 'redux';

import products from "./products";


//Combina todos os reducers em um so
export default combineReducers({
    products,
});