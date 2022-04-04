import { css } from "styled-components";

export const CSSVariables = css`
	--glass-border: 1px solid rgba(255, 255, 255, 0.1);
	--card-highlight: rgb(99 200 234 / 100%);
	--color-react: rgb(97, 218, 251);
	--color-nodejs: rgb(121, 205, 41);
	--color-express: #fff;
	--color-firebase: rgb(245, 130, 32);
`;

export const GlassPanelNear = css`
	background: radial-gradient(
		76.39% 83.9% at 50.59% 49.06%,
		rgba(196, 196, 196, 0) 0%,
		rgba(196, 196, 196, 0.125) 100%
	);
	border: var(--glass-border);
	box-shadow: inset 2px -2px 1px rgb(120 160 191 / 10%);
	backdrop-filter: blur(4px);
	border-radius: 1px;
	z-index: 2;
`;

export const DeepPanel = css`
	border-top: none;
	border-right: none;
	position: relative;
	&::after,
	&::before {
		position: absolute;
		content: "";
		transition: all 0.5s;
	}
	&::before {
		top: -2px;
		height: 2px;
		width: calc(100% - 1px);
		left: 1px;
		transform: skewX(-60deg);
		background: linear-gradient(to top, rgb(255 255 255 / 109%), var(--card-highlight));
		border-top-left-radius: 1px;
		border-top-right-radius: 1px;
		opacity: 0.7;
	}
	&::after {
		right: -1px;
		height: calc(100% + 1px);
		width: 3px;
		top: -1px;
		transform: skewY(-30deg);
		background: linear-gradient(to right, rgb(255 255 255 / 109%), var(--card-highlight));
		border-bottom-right-radius: 1px;
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
`;

export const CardText = css`
	color: #fff;
	margin: 10px;
	opacity: 0.8;
	transition: opacity 0.2s ease-in;

	&:hover {
		opacity: 1;
	}
`;

export const GlowingText = css`
	text-shadow: ${(
		props
	) => `0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff, 0 0 42px ${props.glowColor}, 0 0 82px ${props.glowColor}, 0 0 92px ${props.glowColor}, 0 0 102px ${props.glowColor},
		0 0 151px ${props.glowColor}`};
`;
