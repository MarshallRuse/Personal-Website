import React from "react";
import styled, { css } from "styled-components";
import { lighten } from "color2k";
import { useInView } from "react-intersection-observer";
import { GlowingText } from "../styles/Mixins";
import { convertCSSVar } from "../styles/utils";

const GlowingDiv = css`
	filter: saturate(1) brightness(1.1) blur(0.5px) drop-shadow(5px 5px 10px ${(props) => props.glowColor});
`;

const DimDiv = css`
	filter: saturate(0.5) brightness(0.6);
`;

const GlowingSVG = css`
	fill: ${(props) => lighten(props.glowColor, 0.5)};
	stroke: ${(props) => props.glowColor};
	stroke-width: ${(props) => `${props.strokeWidth}px`};
`;

const DimSVG = css`
	fill: ${(props) => lighten(props.glowColor, 0.2)};
	stroke: ${(props) => lighten(props.glowColor, 0.1)};
	stroke-width: 2px;
`;

const GlowEffect = styled.div`
	${(props) => (props.inView ? GlowingDiv : DimDiv)};
	transition: all 0.3s ease-in;

	& svg {
		${(props) => (props.inView ? GlowingSVG : DimSVG)};
		width: 100%;
	}
`;

const Title = styled.p`
	color: #fff;
	font-family: "Jura", sans-serif;
	font-size: 2em;
	font-weight: 500;
	text-align: center;
	${(props) => props.inView && GlowingText}
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
			{children}
			<Title glowColor={translatedGlowColor} inView={inView}>
				{title}
			</Title>
		</GlowEffect>
	);
};

export default GlowingIcon;
