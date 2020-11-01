import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";

import { ProductsContainer, ProceedToBuyButton } from "./style";
import CartItem from "../CartItem"


const Cart = ({ cart, setCart, store }) => {

    const genProduct = ( obj ) => {

        const newObj = store.find( s => obj.id === s.id );
        newObj.productQty = obj.productQty;

        return newObj;

    }

    return (
        <ProductsContainer>
            {cart && cart.map((p) => { return <CartItem key={'cart'+p.id} product={ genProduct(p) }/>; })}
            { (cart.length > 0) ?
            <ProceedToBuyButton> PROCEED TO BUY </ProceedToBuyButton> :
            <h1>Nada por enquanto </h1> }
        </ProductsContainer>
    );
};
  
//Transforma o reducer em props
const mapStateToProps = (state) => ({
    cart: state.products.cart,    
    store: state.products.store,
  });
  
  //Chama a função que atualiza o state
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductsActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);