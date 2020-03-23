import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    to {
        opacity: 1;
    }
`;

const ColourBackgroundDiv = styled.div`
    background-color: #023e58;
    width: 100%;
    min-height: 100vh;
`;

const SVGLayer = styled.div`
    background-image: url(${props => props.backgroundSVG});
    background-size: cover;
    min-height: 100vh;

    @media (max-width: 600px){
        background-position-x: 38%;
        background-position-y: 130px;
    }

    @media (max-width: 1024px){
        background-position-x: 38%;
        background-position-y: 90px;
    }
`;

const BackgroundImageDiv = styled.div`
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    opacity: 0;
    color: #fff;
    min-height: 100vh;

    animation: ${fadeIn} 2s ease-in forwards;
    animation-delay: 3.2s;

    @media (max-width: 600px){
        background-position-x: 38%;
        background-position-y: 130px;
    }

    @media (max-width: 1024px){
        background-position-x: 38%;
        background-position-y: 90px;
    }
`;

const LinearGradientDiv = styled.div`
    background-image: linear-gradient(to bottom, #2a2552, 60%, transparent);
    background-size: cover;
    opacity: 0;
    color: #fff;
    min-height: 100vh;

    animation: ${fadeIn} 1s ease-in forwards;
    animation-delay: 4.2s;
`;



const HeroBackground = (props) => {
    const [isImageLoaded, setImageLoaded] = useState(false);
    const [dummySuffix] = useState(Date.now());
    const [isAnimationDone, setAnimationDone] = useState(false);
    const [hasError, setHasError] = useState(false);

    const refreshableSVG = props.backgroundSVG + "?dummy=" + dummySuffix;
    setTimeout(() => setAnimationDone(true), 2700);

  
    useEffect(() => {
        const img = new Image();
        
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setHasError(true);

        img.src = props.backgroundImage;
    }, [props.backgroundImage])
  
    
    return (
        <>
            <ColourBackgroundDiv>
                <SVGLayer backgroundSVG={refreshableSVG}>
                        <BackgroundImageDiv 
                            backgroundImage={props.backgroundImage}
                            isImageLoaded={isImageLoaded}
                            isAnimationDone={isAnimationDone}
                        >
                            <LinearGradientDiv>
                                {props.children}
                            </LinearGradientDiv>
                        
                    </BackgroundImageDiv>
                </SVGLayer>
            </ColourBackgroundDiv>
        </>
)};

export default HeroBackground;