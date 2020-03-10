import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const bounceInBottom = keyframes`
    0% {
        -webkit-transform: translateY(500px);
        transform: translateY(500px) scale(1,1);
        /* background-color: red; */
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
  }
  38% {
        -webkit-transform: translateY(0);
        transform: translateY(0) scale(1.3, 0.5);
        /* background-color: blue; */
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
  }
  55% {
        -webkit-transform: translateY(65px);
        transform: translateY(65px) scale(0.8, 1.2);
        /* background-color: orange; */
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
  }
  72% {
        -webkit-transform: translateY(0);
        transform: translateY(0) scale(1.1, 0.8);
        /* background-color: green; */
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
  }
  81% {
        -webkit-transform: translateY(28px);
        transform: translateY(28px) scale(0.9, 1.1);
        /* background-color: black; */
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
  }
  90% {
        -webkit-transform: translateY(0);
        transform: translateY(0) scale(1.1,0.9);
        /* background-color: yellow; */
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
  }
  95% {
        -webkit-transform: translateY(8px);
        transform: translateY(8px) scale(0.95,1.05);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
  }
  100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
        animation-timing-function: ease-out;
        opacity: 1;
  }
`;

const animationMixin = css`
    

    @media (max-width: 600px){
        -webkit-animation: ${bounceInBottom} 2s forwards ;
        animation: ${bounceInBottom} 0.9s forwards;
    }
    @media (min-width: 600px) {
        -webkit-animation: ${bounceInBottom} 2s forwards ;
        animation: ${bounceInBottom} 0.9s forwards;

        -webkit-animation-delay: ${props => props.iconNum * 0.1}s;
        animation-delay: ${props => props.iconNum * 0.15}s;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const StyledIcon = styled.img`
    height: auto;
    opacity: 0;
    width: 80%;

    ${props => (props.animated ? animationMixin : 'animation: none;' )};    
`;

const AnimatedIcon = (props) => {

    const [ref, inView, entry] = useInView({
        rootMargin: '0% 0% -30% 0%',
        threshold: 0,
        triggerOnce: true
    });

    inView ? console.log("Hey there") : console.log("CANT SEE")

    return (
    <>
        <StyledContainer  ref={ref}>
            <StyledIcon 
                src={props.icon} 
                alt={props.altText} 
                animated={inView}
                iconNum={props.iconNum}
            />
        </StyledContainer>
        
    </>
)};

export default AnimatedIcon;