import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { render } from 'react-dom';

const spinInLeft = keyframes`
    0% {
    -webkit-transform: translateX(-1000px) rotate(-720deg);
            transform: translateX(-1000px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

const spinInRight = keyframes`
    0% {
    -webkit-transform: translateX(1000px) rotate(720deg);
            transform: translateX(1000px) rotate(720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

const animationMixin = css`
    @media only screen and (max-width: 600px) {
        -webkit-animation: ${props => props.xsDirection} 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
        animation: ${props => props.xsDirection} 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    }
`;

const StyledWrapper = styled.div`
    opacity: 0;
    ${props => (props.animated ? animationMixin : 'animation: none;' )}; 
`;

const FlipInCard = (props) => {

        const [ref, inView, entry] = useInView({
            threshold: 0.5,
            triggerOnce: true
        });

        const xsDirection = props.xsRow % 2 === 1 ? spinInLeft : spinInRight;
        inView && console.log(`Heres card ${props.xsRow}!`);
    
        return (
            <>
                <StyledWrapper 
                    xsDirection={xsDirection}
                    ref={ref} 
                    animated={inView} 
                >
                    {props.children}
                </StyledWrapper>
            </>
        );
    
  
};

export default FlipInCard;