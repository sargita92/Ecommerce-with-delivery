import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";
import ProductInfoItem from "../../components/ProductInfoItem";

import { 
    ProductContainer,
    ProductTabs,
    ProductTab,
    ProductInfoList,
    ProductInfoDescription,
} from "./style";

const ProductInfo = ( { match, store, shopping, payment }) => {

    const [product, setProduct] = useState({});

    const [isDescriptionVisible, setDescriptionVisibility] = useState('active');
    const [isShopInfoVisible, setShopInfoVisibility] = useState('');
    const [isPaymentVisible, setPaymentVisibility] = useState('');
    
    useEffect( () => {

        setProduct( store.find( s => s.id === match.params.id ) );

    }, [match, store]);

    const ChangeVisibility = (item) =>{

        setDescriptionVisibility('');
        setShopInfoVisibility('');
        setPaymentVisibility('');

        if( item === 'DESCRIPTION'){
            setDescriptionVisibility('active');
        }else if( item === 'SHOP_INFO'){
            setShopInfoVisibility('active');
        }else if( item === 'PAYMENT'){
            setPaymentVisibility('active');
        }else{
            setDescriptionVisibility('active');
        }

    }

    return (
        <ProductContainer>
            <ProductInfoItem product={product}  />
            <ProductTabs >
                <ProductTab className={isDescriptionVisible} onClick={() => ChangeVisibility('DESCRIPTION')} > Description </ProductTab>
                <ProductTab className={isShopInfoVisible} onClick={() => ChangeVisibility('SHOP_INFO')} > Shopping Info </ProductTab>
                <ProductTab className={isPaymentVisible} onClick={() => ChangeVisibility('PAYMENT')} > Payment </ProductTab>
            </ProductTabs>
            <ProductInfoList>
                <ProductInfoDescription className={isDescriptionVisible}>
                    {product.description}
                </ProductInfoDescription>
                <ProductInfoDescription className={isShopInfoVisible}>
                    {shopping}
                </ProductInfoDescription>
                <ProductInfoDescription className={isPaymentVisible} >
                    {payment} 
                </ProductInfoDescription>
            </ProductInfoList>

        </ProductContainer>
    );
};

//Transforma o reducer em props
const mapStateToProps = (state) => ({
    store: state.products.store,
    shopping: state.info.shopping,
    payment: state.info.payment,
  });
  
  //Chama a função que atualiza o state
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(ProductsActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);