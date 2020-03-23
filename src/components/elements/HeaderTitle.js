import React from 'react';
// import { withStyles } from '@material-ui/styles';
import styled, { keyframes } from 'styled-components';
import { Typography } from '@material-ui/core';

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


const StyledText = styled.div`
    animation: ${bounceInFwd} 1.1s cubic-bezier(0.950, 0.050, 0.795, 0.035) 5s both;
`;


class HeaderTitle extends React.Component {

    render() {

        return (
            <>
                <StyledText>
                    <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
                       Marshall Ruse
                    </Typography>
                </StyledText>
            </>
        )
    }
}

export default HeaderTitle;