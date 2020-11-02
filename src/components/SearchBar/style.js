import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100vw;
    max-width: 50em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14vh;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`;

export const SearchBarContainer = styled.div`
    max-width: 20em;
    position: relative;

    margin-top: 2em;

    > svg{
        position: absolute;
        top: 0;
        right: -1em;
    } 

`

export const SearchInput = styled.input`
    width: 100%;

    background-color: transparent;
    border-style: solid;
    border-width: 0 0 0.1em 0;
    border-color: var(--primary-txt-color);
    outline: none;

    padding: 0.3em 1.2em 0.3em 0.3em ;
    border-radius: 0.2em;

`;

export const SearchProductsContainer = styled.div`
    width: 100%;
    max-width: 30em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14vh;

    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: center;
`;
