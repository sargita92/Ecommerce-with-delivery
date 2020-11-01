import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import { TopBarContainer, MenuDiv,CompanyLogo,UserImage } from "./style";

const TopBar = () => {

    return (
        <TopBarContainer>
            <MenuDiv>
                <MenuIcon />
            </MenuDiv>
            <CompanyLogo src="https://i.pinimg.com/564x/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" />
            <UserImage src="https://i.pinimg.com/564x/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg" />
        </TopBarContainer>
    );
};

export default TopBar;