import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 85vw;
    max-width: 30em;
    margin: 1em auto;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProductShowcase = styled.div`
    width: 100%;

    height: 12em;

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

export const ProductShowcaseLeftSide = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ProductShowcaseImage = styled.div`
    width: 90%;
    height: 90%;

    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-image: url(${(props) => props.src});

    border-radius: 0.2em;
`;

export const ProductShowcaseRightSide = styled.div`
    width: 60%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ProductShowcaseName = styled.label`
    width: 90%;

    text-align: left;
    font-size: 1.4em;
    font-weight: bold;

    margin-bottom: 0.5em;
`;

export const ProductShowcaseCategory = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.9em;
    margin-bottom: 0.3em;
`;

export const ProductShowcaseTags = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.6em;
    margin-bottom: 3em;
    color: var(--secondary-txt-color);
`;

export const ProductShowcasePrice = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 0.5em;

`;

export const ProductShowcaseButton = styled.label`
    width: 7em;
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


export const ProductTabs = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .active{
        border-bottom: 0.1em solid var(--primary-txt-color);
    }

    margin: 0 0.3em;
`;

export const ProductTab = styled.div`
    padding: 0.3em;
    

`;

export const ProductInfoList = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    color: var(--secondary-txt-color);
    font-size: 0.8em;

    margin-bottom: 4em;

    .active{
        display: block;
    }
`;

export const ProductInfoDescription = styled.div`
    display: none;

    margin: 1em 0;
`;