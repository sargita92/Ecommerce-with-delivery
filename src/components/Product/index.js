import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";

import { ProductContainer, FavoriteButton, ProductImage, ProductName, ProductPrice, ShopNow } from "./style";

import { FavoriteBorder } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Product = ({ product, favorites, setFavorites, cart, setCart }) => {

    const addToFavorites = ( selectedProduct ) => {
        if(favorites && favorites.filter( f => selectedProduct.id === f.id  ).length > 0 ){ return; }

        let auxFavorites = [...favorites, {id: selectedProduct.id, productQty: 1 }];
        setFavorites(auxFavorites);
    }
    
    const removeFromFavorites = ( selectedProduct ) => {
        if(favorites && favorites.filter( f => selectedProduct.id === f.id  ).length === 0){ return; }
        
        let auxFavorite = favorites.filter( f => selectedProduct.id !== f.id  );
        setFavorites(auxFavorite);
    
    }

    const addToCart = ( selectedProduct ) => {
        if(cart && cart.filter( c => selectedProduct.id === c.id  ).length > 0 ){ return; }

        let auxCart = [...cart, {id: selectedProduct.id, productQty: 1 }];
        setCart(auxCart);
    }

    return (
        <ProductContainer>
            <FavoriteButton>
                { 
                    (favorites && favorites.filter( f => product.id === f.id  ).length > 0 ) 
                    ?  < FavoriteIcon onClick={ () => removeFromFavorites(product) } />
                    : <FavoriteBorder onClick={ () => addToFavorites(product) } />
                }
                
            </FavoriteButton>
            <ProductImage src={product.src} />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ShopNow onClick={ () => addToCart(product) } >Shop Now</ShopNow>
        </ProductContainer>
    );
};

//Transforma o reducer em props
const mapStateToProps = (state) => ({
    favorites: state.products.favorites,
    cart: state.products.cart,
  });
  
  //Chama a função que atualiza o state
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductsActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Product);