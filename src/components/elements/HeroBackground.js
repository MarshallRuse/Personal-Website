import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as SouthernOntarioSVG } from "../../assets/images/HomePage/SouthernOntarioHighwaysArteriesImage.svg";
import breakpoints from "../styles/breakpoints";

const fadeIn = keyframes`
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
	to {
		opacity: 0;
	}
`;

const drawIn = keyframes`
	to {
		stroke-dashoffset: 0;
	}
`;

const SVGWrapper = styled.div`
    overflow: hidden;
    position: relative;
`;

const AnimatedSVG = styled(SouthernOntarioSVG)`
    position: absolute;
    min-height: 100vh;

    @media (max-width: ${breakpoints.sm}) {
        left: -100%;
    }

    & #highways {
        stroke: var(--color-blue-light);
        stroke-width: 1px;
        stroke-dasharray: 550;
        stroke-dashoffset: 550;
        animation: ${drawIn} 1.5s ease-in-out forwards, ${fadeOut} 0.5s ease-out 3s forwards;
    }

    & #arteries {
        stroke: var(--color-pink);
        stroke-width: 0.5px;
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: ${drawIn} 1.5s ease-in-out 0.25s forwards, ${fadeOut} 0.5s ease-out 3s forwards;
    }

    & image {
        opacity: 0;
        animation: ${fadeIn} 1s ease-in 1.5s forwards;
    }
`;

const ColourBackgroundDiv = styled.div`
    background-color: #023e58;
    width: 100%;
    min-height: 100vh;
`;

const LinearGradientBottom = styled.div`
    background-image: linear-gradient(to bottom, transparent 60%, var(--color-blue-dark));
    min-height: 100vh;
    position: relative;
`;

const LinearGradientTop = styled.div`
    background-image: linear-gradient(to bottom, #2a2552, 30%, transparent);
    opacity: 0;
    color: #fff;
    min-height: 100vh;

    animation: ${fadeIn} 1s ease-in forwards;
    animation-delay: 2s;
`;

const HeroBackground = ({ children }) => {
    return (
        <>
            <ColourBackgroundDiv>
                <SVGWrapper>
                    <AnimatedSVG />
                    <LinearGradientBottom>
                        <LinearGradientTop>{children}</LinearGradientTop>
                    </LinearGradientBottom>
                </SVGWrapper>
            </ColourBackgroundDiv>
        </>
    );
};

export default HeroBackground;
