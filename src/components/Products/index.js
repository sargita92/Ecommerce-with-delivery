import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as ProductsActions from "../../store/actions/products";

import { ProductsContainer } from "./style";

import Product from "../../components/Product";

const products = [
    {
        id: 'prod_0',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._AC_UL1500_.jpg",
        title: "Produto 1",
        category: 'Purse',
        stock: 1,
        description: 'Large purse',
        price: "R$100.00",
    },
    {
        id: 'prod_1',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/71W9Qjk9VJL._AC_UL1200_.jpg",
        title: "Produto 2",
        category: 'Purse',
        stock: 1,
        description: 'Medium purse',
        price: "R$200.00",
    },
    {
        id: 'prod_2',
        src:
            "https://cdn.shopify.com/s/files/1/1038/6230/products/everpurse_kate_spade_iphone_charging_black_small_harmony_standing_edit_3.jpg?v=1488838840",
        title: "Produto 3",
        category: 'Purse',
        stock: 1,
        description: 'Medium purse',
        price: "R$400.00",
    },
    {
        id: 'prod_3',
        src:
            "https://raffleoftheday.com/wp-content/uploads/2019/07/guccisite1-min.jpg",
        title: "Produto 4",
        category: 'Wallet',
        stock: 1,
        description: 'Black wallet',
        price: "R$400.00",
    },
    {
        id: 'prod_4',
        src:
            "https://media.bergdorfgoodman.com/images/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/3321157_100010_m/burberry-vintage-check-title-bag",
        title: "Produto 5",
        category: 'Purse',
        stock: 1,
        description: 'Colorful purse',
        price: "R$400.00",
    },
    {
        id: 'prod_5',
        src:
            "https://5.imimg.com/data5/SH/BN/MY-61698818/lady-bag-purse-500x500.png",
        title: "Produto 6",
        category: 'Purse',
        stock: 1,
        description: 'Grey purse',
        price: "R$400.00",
    },
    {
        id: 'prod_6',
        src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFgITiUpSznUFDJiob8wbYPvM_VyL1wYo8TA&usqp=CAU",
        title: "Produto 7",
        category: 'Purse',
        stock: 1,
        description: 'Pink purse',
        price: "R$400.00",
    },
    {
        id: 'prod_7',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._AC_UL1500_.jpg",
        title: "Produto 8",
        category: 'Purse',
        stock: 1,
        description: 'Large purse',
        price: "R$100.00",
    },
    {
        id: 'prod_8',
        src:
            "https://images-na.ssl-images-amazon.com/images/I/71W9Qjk9VJL._AC_UL1200_.jpg",
        title: "Produto 9",
        category: 'Purse',
        stock: 1,
        description: 'Medium purse',
        price: "R$200.00",
    },
    {
        id: 'prod_9',
        src:
            "https://cdn.shopify.com/s/files/1/1038/6230/products/everpurse_kate_spade_iphone_charging_black_small_harmony_standing_edit_3.jpg?v=1488838840",
        title: "Produto 10",
        category: 'Purse',
        stock: 1,
        description: 'Medium purse',
        price: "R$400.00",
    },
    {
        id: 'prod_10',
        src:
            "https://raffleoftheday.com/wp-content/uploads/2019/07/guccisite1-min.jpg",
        title: "Produto 11",
        category: 'Wallet',
        stock: 1,
        description: 'Black wallet',
        price: "R$400.00",
    },
    {
        id: 'prod_11',
        src:
            "https://media.bergdorfgoodman.com/images/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/3321157_100010_m/burberry-vintage-check-title-bag",
        title: "Produto 12",
        category: 'Purse',
        stock: 1,
        description: 'Colorful purse',
        price: "R$400.00",
    },
    {
        id: 'prod_12',
        src:
            "https://5.imimg.com/data5/SH/BN/MY-61698818/lady-bag-purse-500x500.png",
        title: "Produto 13",
        category: 'Purse',
        stock: 0,
        description: 'Grey purse',
        price: "R$400.00",
    },
];


const Products = ({ store, setStore}) => {

    useEffect( () => {
        setStore(products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <ProductsContainer>
            {store.filter( p => p.stock > 0 ).map((p) => {
                return <Product product={p} key={p.id} />;
            })}
        </ProductsContainer>
    );
};
  
//Transforma o reducer em props
const mapStateToProps = (state) => ({
store: state.products.store,
});

//Chama a função que atualiza o state
const mapDispatchToProps = (dispatch) =>
bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);