import React from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { BottomBarContainer, IconGroup, IconQty } from "./style";

const BottomBar = ({favorites, cart}) => {

    let history = useHistory();

    const favoritesCount = ( array ) => {

        const count = array.length;

        if(count > 9){
            return <IconQty>9+</IconQty>;
        } else if(count > 0 ) {
            return <IconQty>{count}</IconQty>;
        } else {
            return ;
        }



    }

    return (
        <BottomBarContainer>
            <HomeIcon onClick={ () => {history.push('/')} } />
            <SearchIcon onClick={ () => {history.push('/search')} }/>
            
            <IconGroup>
                <FavoriteIcon onClick={ () => {history.push('/liked')} } />
                { favoritesCount(favorites)}
            </IconGroup>
            <IconGroup>
                <ShoppingBasketIcon onClick={ () => {history.push('/shop')} } />
                { favoritesCount(cart)}
            </IconGroup>
            
        </BottomBarContainer>
    );
};

//Transforma o reducer em props
const mapStateToProps = (state) => ({
    favorites: state.products.favorites,
    cart: state.products.cart,
  });
  
  export default connect(mapStateToProps)(BottomBar);