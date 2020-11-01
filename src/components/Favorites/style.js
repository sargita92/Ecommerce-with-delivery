import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100vw;
    max-width: 50em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14vh;

    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: center;
`;

export const AddAllToCartButton = styled.label`
    width: 9em;
    margin: 2em auto;
    text-align: center;
    font-size: 1.2em;
    background-color: var(--primary-txt-color);
    color: var(--primary-bg-color);
    padding: 0.8em;
    border-radius: 0.2em;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {  
        background-color: var(--primary-bg-color);
        color: var(--primary-txt-color);
        border: 0.1em solid var(--primary-txt-color);
    }
`;
