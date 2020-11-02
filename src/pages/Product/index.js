import React from 'react';
import ProductInfo from '../../components/ProductInfo';
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";

const Product = ( { match } ) => {

    return (
        <div>
            <TopBar />
            <ProductInfo match={match} />
            <BottomBar />
        </div>

    );
};

export default Product;