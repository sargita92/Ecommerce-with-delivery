import React from 'react';
import Favorites from '../../components/Favorites';
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";

const Liked = () => {

    return (
        <div>
            <TopBar />
            <Favorites />
            <BottomBar />
        </div>

    );
};

export default Liked;