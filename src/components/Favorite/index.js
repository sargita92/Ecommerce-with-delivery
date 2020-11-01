import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";

import { 
    FavoriteContainer, 
    FavoriteLeftSide, 
    FavoriteImage, 
    FavoriteRightSide, 
    FavoriteName, 
    FavoriteCategory, 
    FavoriteDescription,
    FavoritePrice,
    RemoveFavoriteButton,
} from "./style";

const Favorite = ({ favorites, setFavorites, product }) => {
    
    const removeFromFavorites = ( selectedProduct ) => {
        if(favorites && favorites.filter( f => selectedProduct.id === f.id  ).length === 0){ return; }
        
        let auxFavorite = favorites.filter( i => i.id !== selectedProduct.id);
        setFavorites(auxFavorite);
    
    }

    return (
        <FavoriteContainer>
            <FavoriteLeftSide>
                <FavoriteImage src={product.src}  />
            </FavoriteLeftSide>
            <FavoriteRightSide>
                <FavoriteName>
                    {product.title}
                </FavoriteName>
                <FavoriteCategory>
                    {product.category}
                </FavoriteCategory>
                <FavoriteDescription>
                    {product.description}
                </FavoriteDescription>
                <FavoritePrice>
                { (product.stock > 0) ? product.price : "Produto Indisponivel no momento"}
                </FavoritePrice>
                <RemoveFavoriteButton onClick={ () => removeFromFavorites(product) }>
                    REMOVE
                </RemoveFavoriteButton>
            </FavoriteRightSide>

        </FavoriteContainer>
    );
};

//Transforma o reducer em props
const mapStateToProps = (state) => ({
    favorites: state.products.favorites,
  });
  
  //Chama a função que atualiza o state
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductsActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favorite);