import styled from "styled-components";

export const TopBarContainer = styled.div`
    width: 98vw;
    height: 10vh;

    position: relative;
    top: 0.5em;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MenuDiv = styled.div`
    margin: 0.4em 1em;

    > svg {
        width: 2em;
        height: 2em;
    }
`;

export const CompanyLogo = styled.div`
    width: 6em;
    height: 3em;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${(props) => props.src});
`;

export const UserImage = styled.div`
    width: 3em;
    height: 3em;

    position: absolute;
    right: 1em;

    border-radius: 50%;

    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${(props) => props.src});
`;
