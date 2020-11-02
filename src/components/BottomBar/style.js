import styled from "styled-components";

export const BottomBarContainer = styled.div`

    width: 85vw;
    max-width: 21em;
    height: 10vh;

    position: fixed;
    bottom: 0.5em;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--primary-bg-color);
    border: 0.1em solid var(--secondary-bg-color);
    border-radius: 1em;
    box-shadow: 5px 5px 10px var(--secondary-bg-color);


    > svg{
        height: 6vh;
        width: 6vh;
    }
`;

export const IconGroup = styled.div`

    position: relative;

    height: 6vh;
    width: 6vh;

    > svg{
        height: 100%;
        width: 100%;
    }

`;

export const IconQty = styled.div`
    height: 50%;
    width: 50%;

    border: 0.1em solid var(--secondary-bg-color);
    background-color: var(--primary-txt-color);
    border-radius: 50%;

    position: absolute;
    top: -1vh;
    right: -1vh;

    padding: 0.1em;

    text-align: center;
    font-size: 0.7em;
    color: var(--primary-bg-color);


`
