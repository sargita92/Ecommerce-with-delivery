import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 11em;
    height: 14em;

    position: relative;
    display: flex;
    flex-direction: column;

    border-radius: 0.2em;
    background-color: var(--secondary-bg-color);
    margin: 1.0em 0.5em;
    
    cursor: pointer;
`;

export const FavoriteButton = styled.div`
    position: absolute;
    top: 0.2em;
    right: 0.2em;

    padding: 0.4em; 

    width: 1.5em;
    height: 1.5em;

    transition: all 0.2s;

    &:hover {  
        width: 1.6em;
        height: 1.6em;
    }
     
`;

export const ProductImage = styled.div`
    margin-top: 0.8em;
    margin-left: auto;
    margin-right: auto;
    width: 8em;
    height: 8em;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${(props) => props.src});
`;

export const ProductName = styled.label`
    width: 8em;

    margin-top: 0.2em;
    margin-left: auto;
    margin-right: auto;

    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
`;

export const ProductPrice = styled.label`
    width: 8em;

    margin-top: 0.1em;
    margin-left: auto;
    margin-right: auto;
    
    font-size: 0.9em;
    text-align: center;
`;

export const ShopNow = styled.label`
    width: 5em;

    padding: 0.1em;
    margin-top: 0.3em;
    margin-left: auto;
    margin-right: auto;

    border-bottom: 0.1em solid var(--primary-txt-color);
    border-radius: 0.1em;
    text-align: center;
    
    cursor: pointer;
    transition: all 0.2s;

    &:hover {  
        background-color: var(--primary-txt-color);
        color: var(--primary-bg-color);
    }
`;
