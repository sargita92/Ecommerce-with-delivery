import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";

import { 
    ProductShowcase,
    FavoriteButton,
    ProductShowcaseLeftSide, 
    ProductShowcaseImage, 
    ProductShowcaseRightSide, 
    ProductShowcaseName, 
    ProductShowcaseCategory, 
    ProductShowcaseTags,
    ProductShowcasePrice,
    ProductShowcaseButton,
} from "./style";

import { FavoriteBorder } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ProductInfoItem = ({favorites, setFavorites, cart, setCart,  product }) => {

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
        <ProductShowcase >
            <FavoriteButton>
                { 
                    (favorites && favorites.filter( f => product.id === f.id  ).length > 0 ) 
                    ?  < FavoriteIcon onClick={ () => removeFromFavorites(product) } />
                    : <FavoriteBorder onClick={ () => addToFavorites(product) } />
                }
                
            </FavoriteButton>
            <ProductShowcaseLeftSide>
                <ProductShowcaseImage src={product.src}  />
            </ProductShowcaseLeftSide>
            <ProductShowcaseRightSide>
                <ProductShowcaseName>
                    {product.title}
                </ProductShowcaseName>
                <ProductShowcaseCategory>
                    {product.category}
                </ProductShowcaseCategory>
                <ProductShowcaseTags>
                    {product.tag}
                </ProductShowcaseTags>
                <ProductShowcasePrice>
                { (product.stock > 0) ? product.price : "Produto Indisponível no momento"}
                </ProductShowcasePrice>
                <ProductShowcaseButton onClick={ () => addToCart(product)} >
                    ADD TO CART
                </ProductShowcaseButton>
            </ProductShowcaseRightSide>
        </ProductShowcase>
           
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductInfoItem);