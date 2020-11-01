import styled from "styled-components";

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;

    position: relative;

    width: 85vw;
    max-width: 50em;
    height: 34vw;
    max-height: 20em;

    margin-top: 1.2em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.6em;

    border-radius: 0.2em;

    background-color: var(--primary-bg-color);

`;

export const LeftArrowButton = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 10%;
    height: 100%;

    padding-left: 2%;

    opacity: 0.8;

    > svg{
        width: 100%;
        height: 100%;

        color: var(--primary-txt-color);
    }
`;

export const RightArrowButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 10%;
    height: 100%;

    padding-right: 2%;

    opacity: 0.8;

    > svg{
        width: 100%;
        height: 100%;

        color: var(--primary-txt-color);
    }
`;

export const CarouselImages = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    --webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;

`;

export const CarouselImage = styled.div`
    width: 100%;
    height: 100%;

    flex: none;

    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-image: url(${(props) => props.src});

    scroll-snap-align: start;
    pointer-events: none;
`;

export const CarouselBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 20%;
    
    opacity: 0.6;

    svg{
        background-color: var(--primary-bg-color);
        padding: 0.1em;
        opacity: 0.8;
        border-radius: 50%;
        margin-right: 0.1em;
    }

`;