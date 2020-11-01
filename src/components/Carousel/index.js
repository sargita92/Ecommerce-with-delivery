import React, { useEffect, useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import { 
    CarouselContainer, 
    LeftArrowButton, 
    RightArrowButton, 
    CarouselImage, 
    CarouselImages, 
    CarouselBar 
} from "./style";

const slides = [
    {
        id: 'slide_0',
        src: "https://images-na.ssl-images-amazon.com/images/I/71W9Qjk9VJL._AC_UL1200_.jpg",
        title: "Bolsa 1",
        url: "", 
    },
    {
        id: 'slide_1',
        src: "https://raffleoftheday.com/wp-content/uploads/2019/07/guccisite1-min.jpg",
        title: "Bolsa 2",
        url: "", 
    },
    {
        id: 'slide_2',
        src: "https://images-na.ssl-images-amazon.com/images/I/910zU0vyBrL._AC_UL1500_.jpg",
        title: "Bolsa 3",
        url: "", 
    },
    {
        id: 'slide_3',
        src: "https://5.imimg.com/data5/SH/BN/MY-61698818/lady-bag-purse-500x500.png",
        title: "Bolsa 4",
        url: "", 
    },
]

const timer = 10000;

let timeout;

const Carousel = () => {


    const [width, setWidth] = useState(0);
    const [size] = useState(slides.length);
    const [count, setCount] = useState(0);

    const changeSlide = ( isIncrement = true  ) => {
        if(isIncrement){
            setCount(count + 1);
            if(count >= size - 1){
                setCount(0);
             }
        }else{
            setCount(count - 1);
            if(count <= 0){
                setCount(size - 1);
            }
        }   

    }

    const chooseSlide = ( slideNumber ) => {
        setCount(slideNumber);  
    }

    useEffect( () => {

        clearTimeout(timeout);
        document.getElementById('imgGallery').scrollTo(count * width, 0);
        timeout = setTimeout(() => changeSlide(true), timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, count])

    useEffect( () => {
        setWidth(document.getElementById('imgGallery').offsetWidth);        
    },[]);



    return (
        <CarouselContainer>
            <LeftArrowButton onClick={() => changeSlide(false)}>
                <ArrowBackIosIcon />
            </LeftArrowButton>
            <CarouselImages id='imgGallery'>
                {slides.map((s) => {
                    return <CarouselImage key={"img_" + s.id} src={s.src} />;
                })}         
            </CarouselImages>
            <CarouselBar>
                { slides.map( (s, key) => 
                    (key === count) ? <RadioButtonCheckedIcon key={s.id} onClick={()=>chooseSlide(key)} /> : <RadioButtonUncheckedIcon key={s.id} onClick={()=>chooseSlide(key)} />
                )}
            </CarouselBar>
            <RightArrowButton onClick={() => changeSlide()}>
                <ArrowForwardIosIcon />
            </RightArrowButton>
        </CarouselContainer>
    );
};

export default Carousel;