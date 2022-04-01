import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	color: var(--color-pink);
	font-family: "Orbitron", sans-serif;
	font-size: 4rem;
	font-style: italic;
	margin-top: calc(1em + 105px);
	position: relative;
	text-align: center;

	&::after {
		color: #fff;
		content: "Marshall Ruse";
		display: inline;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(calc(-50% - 4px), calc(-50% - 4px));
		width: 100%;
	}
`;

const HeaderTitle = () => <Title>Marshall Ruse</Title>;

export default HeaderTitle;
