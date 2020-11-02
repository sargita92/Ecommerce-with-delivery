import styled from "styled-components";

export const FavoriteContainer = styled.div`
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

export const FavoriteLeftSide = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const FavoriteImage = styled.div`
    width: 90%;
    height: 90%;

    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-image: url(${(props) => props.src});

    border-radius: 0.2em;
`;

export const FavoriteRightSide = styled.div`
    width: 60%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FavoriteName = styled.label`
    width: 90%;

    text-align: left;
    font-size: 1.4em;
    font-weight: bold;

    margin-bottom: 0.5em;
`;

export const FavoriteCategory = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.9em;
    margin-bottom: 0.3em;
`;

export const FavoriteTag = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.6em;
    margin-bottom: 3em;
    color: var(--secondary-txt-color);
`;


export const RemoveFavoriteButton = styled.label`
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

export const FavoritePrice = styled.label`
    width: 90%;
    text-align: left;
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 0.3em;

`;