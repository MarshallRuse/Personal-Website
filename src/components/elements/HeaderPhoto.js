import React from 'react';
import Img from 'react-image';
// import { withStyles } from '@material-ui/styles';
import styled, { keyframes } from 'styled-components';

import PictureOfMe from '../../assets/images/HomePage/PictureOfMe.jpg';

const bounceInFwd = keyframes`
        0% {
            transform: scale(0);
            animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            
            transform: scale(1);
            animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            transform: scale(0.7);
            animation-timing-function: ease-in;
        }
        72% {
            transform: scale(1);
            animation-timing-function: ease-out;
        }
        81% {
            transform: scale(0.84);
            animation-timing-function: ease-in;
        }
        89% 
            transform: scale(1);
            animation-timing-function: ease-out;
        }
        95% {
            transform: scale(0.95);
            animation-timing-function: ease-in;
        }
        100% {
            transform: scale(1);
            animation-timing-function: ease-out;
        }
`;


const StyledImage = styled.img`
    animation: ${bounceInFwd} 1.1s cubic-bezier(0.950, 0.050, 0.795, 0.035) 1s both;
    border-radius: 50%;
    width: 100%;
`;


class HeaderPhoto extends React.Component {

    render() {

        return (
            <>
                <StyledImage src={PictureOfMe} />
            </>
        )
    }
}

export default HeaderPhoto;