import React from 'react';
import Products from '../../components/Products';
import Carousel from '../../components/Carousel';
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";

const Main = () => {

    return (
        <div>
            <TopBar />
            <Carousel />
            <Products  />
            <BottomBar />
        </div>

    );
};

export default Main;