import React from "react";
import styled from "styled-components";
import { lighten } from "color2k";
import { useInView } from "react-intersection-observer";
import { convertCSSVar } from "../styles/utils";

const GlowEffect = styled.div`
    position: relative;

    & .overlapped {
        width: 100%;
    }

    & .overlapping {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease-in;
        width: 100%;
    }

    & .overlapping-text {
        position: absolute;
        bottom: -60%;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease-in;
    }

    & .dim {
        filter: saturate(0.5) brightness(0.6);

        & svg {
            fill: ${(props) => lighten(props.glowColor, 0.2)};
            stroke: ${(props) => lighten(props.glowColor, 0.1)};
            stroke-width: 2px;
            width: 100%;
        }
    }

    & .glowing {
        opacity: ${(props) => (props.inView ? 1 : 0)};
        filter: saturate(1) brightness(1.1) blur(0.5px) drop-shadow(5px 5px 10px ${(props) => props.glowColor});

        & svg {
            fill: ${(props) => lighten(props.glowColor, 0.5)};
            stroke: ${(props) => props.glowColor};
            stroke-width: ${(props) => `${props.strokeWidth}px`};
            width: 100%;
        }
    }

    & .overlapping-text.glowing {
        text-shadow: ${(
            props
        ) => `0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 42px ${props.glowColor}, 0 0 82px ${props.glowColor}, 0 0 92px ${props.glowColor}, 0 0 102px ${props.glowColor},
		0 0 151px ${props.glowColor}`};
        opacity: ${(props) => (props.inView ? 1 : 0)};
    }
`;

const Title = styled.p`
    color: #fff;
    font-family: "Jura", sans-serif;
    font-size: 2em;
    font-weight: 500;
    text-align: center;
`;

const GlowingIcon = (props) => {
    const { children, title = "", glowColor = "#fff", strokeWidth = 6 } = props;
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: false,
        fallbackInView: true,
    });
    const translatedGlowColor = convertCSSVar(glowColor);

    return (
        <GlowEffect glowColor={translatedGlowColor} strokeWidth={strokeWidth} inView={inView} ref={ref}>
            <div className='overlapped dim'>{children}</div>
            <div className='overlapping glowing'>{children}</div>
            <Title className='overlapping-text dim' glowColor={translatedGlowColor} inView={inView}>
                {title}
            </Title>
            <Title className='overlapping-text glowing' glowColor={translatedGlowColor} inView={inView}>
                {title}
            </Title>
        </GlowEffect>
    );
};

export default GlowingIcon;
