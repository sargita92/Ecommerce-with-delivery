import styled from "styled-components";

export const CartItemContainer = styled.div`
    width: 85vw;
    max-width: 30em;

    height: 12em;

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border-bottom: 0.1em solid var(--primary-txt-color);
`;

export const CartItemLeftSide = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CartItemImage = styled.div`
    width: 60%;
    height: 60%;

    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-image: url(${(props) => props.src});

    border-radius: 0.2em;
`;

export const CartItemQtyBox = styled.div`
    width: 60%;
    height: 15%;

    margin-top: 1em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const CartItemQtyButton = styled.div`
    width: 33.33%;
    height: 100%;

    background-color: var(--primary-txt-color);
    color: var(--primary-bg-color);

    text-align: center;

    border: 0.05em solid var(--primary-txt-color);
    padding-top: 0.2em;
    font-size: 1.4em;
    
    cursor: pointer;
    transition: all 0.2s;

    &:hover {  
        background-color: var(--secondary-bg-color);
        color: var(--primary-txt-color);
    }
`;

export const CartItemQtyLabel = styled.div`
    width: 33.33%;
    height: 100%;

    text-align: center;

    background-color: var(--primary-bg-color);
    color: var(--primary-txt-color);

    border-top: 0.05em solid var(--primary-txt-color);
    border-bottom: 0.05em solid var(--primary-txt-color);
    padding-top: 0.2em;
    font-size: 1.4em;
`;

export const CartItemRightSide = styled.div`
    width: 60%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CartItemName = styled.label`
    width: 90%;

    text-align: left;
    font-size: 1.4em;
    font-weight: bold;

    margin-bottom: 0.5em;
`;

export const CartItemCategory = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.9em;
    margin-bottom: 0.3em;
`;

export const CartItemDescription = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.6em;
    margin-bottom: 3em;
    color: var(--secondary-txt-color);
`;


export const CartItemPrice = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 0.3em;

`;

export const RemoveCartItemButton = styled.label`
    width: 4.5em;
    text-align: center;
    margin-left: 5%;
    margin-right: auto;

    padding: 0.2em;

    border-bottom: 0.1em solid var(--primary-txt-color);
    border-radius: 0.1em;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {  
        background-color: var(--primary-txt-color);
        color: var(--primary-bg-color);
    }

`;