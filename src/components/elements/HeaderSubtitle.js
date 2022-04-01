import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import useInterval from "../../hooks/useInterval";

const root = css`
	--f-size: 3;
	--f-unit: 1rem;
	--f: calc(var(--f-size) * var(--f-unit));
`;

const glitch_p = keyframes`
  17% { --scale: .87; }
  31% { --scale: 1.05; }
  37% { --scale: 1.1; }
  47% { --scale: .91; }
  87% { --scale: 1; }
`;

const glitch_a = keyframes`
  5%,25%,45%,65%,85%, 95% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%; 
  }
  20% {
    --left: .005;
  }
  40% {
    --left: .01;
    --v-height: 20%;
    --top: 3;
  }
  /* 60% {
    --left: .03;
    --v-height: 25%;
    --top: 6;
  } */
  80% {
    --left: .07;
    --v-height: 5%;
    --top: 8;
  }
  100% {
    --left: .083;
    --v-height: 30%;
    --top: 1;
  }
`;

const glitch_b = keyframes`
    5%,25%,45%,65%,85%, 95% {
    --top: 0;
    --left: 0;
  }
  0% {
   --v-height: 15%; 
   --top: 6;
  }
  20% {
    --left: -.005;
  }
  40% {
    --left: -.01;
    --v-height: 17%;
    --top: 3;
  }
  60% {
    --left: -.03;
    --v-height: 35%;
    --top: 6;
  }
  /* 80% {
    --left: -.07;
    --v-height: 5%;
    --top: 8;
  } */
  100% {
    --left: -.063;
    --v-height: 30%;
    --top: 1;
  }
`;

const Subtitle = styled.h2`
	${root}
	flex: 1;
	font-family: "Orbitron", sans-serif;
	font-size: var(--f);
	font-style: italic;
	text-align: center;
	transform: scaleX(var(--scale, 1));
	animation: ${glitch_p} 11s infinite alternate;

	&::after,
	&::before {
		--top: 0; // offset from top [0 - 10]
		--left: 0; // offset from left [0.001 - 1]
		--v-height: 20%; // visible part

		--n-tenth: calc(var(--f-size) * 0.1 * var(--top));
		--t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
		--b-cut: calc(var(--t-cut) + var(--v-height));
		box-sizing: border-box;

		content: ${(props) => `'${props.pseudoContent}'`};
		position: absolute;
		width: 100%;
		left: 0;
		text-align: center;

		transform: translateX(calc(var(--left) * 50%));

		// this helps to get rid of pixelization
		filter: drop-shadow(0 0 transparent);

		text-shadow: calc(var(--left) * -2em) 0 0.02em var(--color-blue-light),
			calc(var(--left) * -3em) 0 0.02em var(--color-pink);

		clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
	}

	&::before {
		animation: ${glitch_b} 2.7s infinite alternate-reverse;
	}
	&::after {
		animation: ${glitch_a} 4.1s infinite alternate;
	}
`;

const HeaderSubtitle = () => {
	const subtitles = ["Web Developer", "Web Designer", "Experience Designer", "Experience Developer"];
	const [subtitleIndex, setSubtitleIndex] = useState(0);
	const subtitleDuration = 2000;

	useInterval(() => {
		subtitleIndex === subtitles.length - 1 ? setSubtitleIndex(0) : setSubtitleIndex(subtitleIndex + 1);
	}, subtitleDuration);

	return <Subtitle pseudoContent={subtitles[subtitleIndex]}>{subtitles[subtitleIndex]}</Subtitle>;
};

export default HeaderSubtitle;
