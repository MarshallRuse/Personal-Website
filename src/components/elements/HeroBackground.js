import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledBackground = styled.div`
    background-image: linear-gradient(to bottom, #2a2552, 60%, transparent), url(${props => props.backgroundImage});
    background-size: cover;
    color: #fff;
    min-height: 100vh;
    padding: 64px 0px 80px;
`;


const HeroBackground = (props) => (
    <>
        <StyledBackground backgroundImage={props.backgroundImage}>
            {React.Children}
        </StyledBackground>
    </>
);

export default HeroBackground;