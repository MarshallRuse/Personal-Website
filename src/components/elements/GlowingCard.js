import React from 'react';
import styled, {keyframes} from 'styled-components';


const StyledWrapper = styled.div`
    &:before {
        content: '';
        background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
        position: absolute;
        top: -2px;
        left: -2px;
        -webkit-background-size: 400%;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: animate 20s linear infinite; 
        opacity: 0;
        transition: opacity .3s ease;

    }

    &:hover:before {
        opacity: 1;
    }

    &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #111;
    }
`;
const GlowingCard = (props) => {

    return (
        <>
            <StyledWrapper>
                {props.children}
            </StyledWrapper>
        </>
    );
}

export default GlowingCard;