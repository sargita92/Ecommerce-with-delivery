import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

import * as ProductsActions from "../../store/actions/products";

import { ProductsContainer, AddAllToCartButton } from "./style";
import Favorite from "../Favorite"


const Favorites = ({ cart, setCart, favorites, store }) => {

    let history = useHistory();

    const addToCart = ( ) => {

        if(cart.length > 0){
            let auxFavorite = favorites.filter( f => store.find( s =>  s.id === f.id ).stock > 0 && cart.filter( c =>  c.id !== f.id ).length > 0 );

            if( auxFavorite.length > 0 ){
                let auxCart = [...cart, ...auxFavorite ];
                setCart(auxCart); 
             }

        }else{

            let auxFavorite = favorites.filter( f => store.find( s =>  s.id === f.id ).stock > 0 );

            if( auxFavorite.length > 0 ){ setCart(auxFavorite); }
        }

        history.push('/shop');
    }

    const genProduct = ( obj ) => {

        const newObj = store.find( s => obj.id === s.id );
        newObj.productQty = obj.productQty;

        return newObj;

    }

    return (
        <ProductsContainer>
            
            {favorites.map((p) => { return <Favorite key={'fav_'+p.id} product={ genProduct(p) }/>; })}
            { (favorites.length > 0) ?
            <AddAllToCartButton onClick={ () => addToCart() }> ADD ALL TO CART </AddAllToCartButton> :
            <h1>Nada por enquanto </h1> }
        </ProductsContainer>
    );
};
  
//Transforma o reducer em props
const mapStateToProps = (state) => ({
    favorites: state.products.favorites,
    cart: state.products.cart,
    store: state.products.store,
  });
  
  //Chama a função que atualiza o state
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductsActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites);