import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";

import { 
    CartItemContainer, 
    CartItemLeftSide, 
    CartItemImage,
    CartItemQtyBox,
    CartItemQtyButton,
    CartItemQtyLabel,
    CartItemRightSide, 
    CartItemName, 
    CartItemCategory, 
    CartItemTag,
    CartItemPrice,
    RemoveCartItemButton
} from "./style";

const CartItem = ({ product, cart, setCart }) => {

    const changeCartItemQty = ( IsIncrease = true ) =>{
        
        let auxCart = [...cart];

        if(IsIncrease){
            auxCart.find( p => p.id === product.id ).productQty += 1;
        }else{
            if(product.productQty <= 1){return;}  
            auxCart.find( p => p.id === product.id ).productQty -= 1;
        }

        setCart(auxCart);

    }

    const removeFromFavorites = ( selectedProduct ) => {
        if(cart && cart.filter( f => selectedProduct.id === f.id  ).length === 0){ return; }
        
        let auxCart = cart.filter( i => i.id !== selectedProduct.id  );
        setCart(auxCart);
    
    }
    
    return (
        <CartItemContainer>
            <CartItemLeftSide>
                <CartItemImage src={product.src}  />
                <CartItemQtyBox>
                    <CartItemQtyButton onClick={ () => changeCartItemQty(false) } >-</CartItemQtyButton>
                    <CartItemQtyLabel>{product.productQty}</CartItemQtyLabel>
                    <CartItemQtyButton onClick={ () => changeCartItemQty(true) } >+</CartItemQtyButton>
                </CartItemQtyBox>
            </CartItemLeftSide>
            <CartItemRightSide>
                <CartItemName>
                    {product.title}
                </CartItemName>
                <CartItemCategory>
                    {product.category}
                </CartItemCategory>
                <CartItemTag>
                    {product.tag}
                </CartItemTag>
                <CartItemPrice>
                { (product.stock > 0) ? product.price : "Produto Indisponivel no momento"}
                </CartItemPrice>
                <RemoveCartItemButton onClick={ () => removeFromFavorites(product) }>
                    REMOVE
                </RemoveCartItemButton>
            </CartItemRightSide>

        </CartItemContainer>
    );
};

//Transforma o reducer em props
const mapStateToProps = (state) => ({
    cart: state.products.cart,
  });
  
  //Chama a função que atualiza o state
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductsActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartItem);