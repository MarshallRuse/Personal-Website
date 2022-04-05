import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    to {
        opacity: 1;
    }
`;

const AnimatedText = styled.div`
    ${(props) => props.styling}
    opacity: 0;
    animation: ${fadeIn} ${(props) => props.animationDuration} linear forwards;
    animation-delay: ${(props) => props.animationDelay};
`;

const FadeInText = (props) => (
    <AnimatedText
        animationDelay={props.animationDelay || "0s"}
        animationDuration={props.animationDuration || "1s"}
        styling={props.styling}
    >
        {props.children}
    </AnimatedText>
);

export default FadeInText;
