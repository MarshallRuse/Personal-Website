import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { CSSVariables, GlassPanelNear, DeepPanel, CardText } from "../styles/Mixins";
import breakpoints from "../styles/breakpoints";
import ImageBarbell from "../../assets/images/WorkoutLogger/barbell.jpg";

import ReactIcon from "../../assets/logos/react.svg";
import NodejsIcon from "../../assets/logos/nodejs.svg";
import ExpressIcon from "../../assets/logos/express.svg";
import FirebaseIcon from "../../assets/logos/firebase.svg";

const CardContainer = styled.div`
	${CSSVariables}
	cursor: pointer;
	display: grid;

	grid-template-columns: 1.4fr 0.5fr 0.4fr 0.3fr 3.6fr 0.3fr 0.4fr;
	grid-template-rows: 0.4fr 0.7fr 2.1fr 0.8fr 1fr 1fr;
	gap: 0px 0px;
	grid-auto-flow: row;

	@media (max-width: ${breakpoints.sm}) {
	}
`;
// grid-template-areas:    ". . . background background background ."
//                             "icons . header header header header header"
//                             "icons . . background background background ."
//                             "icons .

const CardBackground = styled.div`
	background: linear-gradient(341.88deg, rgba(196, 196, 196, 0.483) 4.32%, rgba(196, 196, 196, 0.07) 97.22%);
	border: var(--glass-border);
	box-shadow: 4px -3px 3px rgb(73 187 226 / 40%), inset -4px 3px 4px rgba(72, 181, 221, 0.4);
	backdrop-filter: blur(8px);
	grid-area: 1 / 4 / 5 / 7;
	transition: box-shadow 0.2s ease-in;
	z-index: 1;
	${CardContainer}:hover & {
		box-shadow: 4px -3px 4px rgb(73 187 226 / 90%), inset -5px 4px 4px rgba(72, 181, 221, 0.45);
	}

	${DeepPanel}
`;

const CardHeader = styled.div`
	width: 100%;
	height: 100%;
	grid-area: 2 / 3 / 3 / 8;

	${GlassPanelNear}

	${DeepPanel}
`;

const TextTitle = styled.p`
	${CardText}
	font-family: "Orbitron", sans-serif;
	font-size: 1.2rem;
`;

const TextSubtitle = styled.p`
	${CardText}
	font-family: "Jura", sans-serif;
	font-size: 0.9rem;
`;

const CardImage = styled.img`
	border: 1px solid var(--card-highlight);
	border-radius: 1px;
	grid-area: 3 / 5 / 4 / 6;
	margin: 5px auto;
	opacity: 0.7;
	transition: opacity 0.4s ease-in;
	width: 100%;
	z-index: 3;

	${CardContainer}:hover & {
		opacity: 1;
	}
`;

const CardFooter = styled.div`
	${GlassPanelNear}
	${DeepPanel}
	background: radial-gradient(
		76.39% 93.3% at 45.85% 50.95%,
		rgba(196, 196, 196, 0) 0%,
		rgba(196, 196, 196, 0.2376) 100%
	);
	box-shadow: inset 5px -5px 5px rgb(255 255 255 / 5%);
	backdrop-filter: blur(6px);
	/* Note: backdrop-filter has minimal browser support */
	border: var(--glass-border);
	border-radius: 1px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 0px 0px;
	grid-auto-flow: row;
	grid-template-areas:
		"card-description card-description"
		"card-demo card-source";
	grid-area: 4 / 3 / 6 / 8;
	z-index: 2;
`;

const CardDescription = styled.div`
	grid-area: card-description;
`;

const OutlinedSection = styled.div`
	border: 1px solid #fff;
	height: calc(100% - 10px);
	padding: 5px;
	width: calc(100% - 10px);
	margin-top: 5px;
	margin-left: 5px;
`;

const Description = styled.p`
	${CardText}
	font-family: "Jura", sans-serif;
	font-size: 0.8rem;
`;

const CardDemo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 4px solid rgba(255, 255, 255, 0.6);
	border-right: 2px solid rgba(255, 255, 255, 0.6);
	box-shadow: 0px 1px 7px rgba(255, 255, 255, 0.2);
	grid-area: card-demo;
`;

const CardSource = styled.div`
	border-top: 4px solid rgba(255, 255, 255, 0.6);
	border-left: 2px solid rgba(255, 255, 255, 0.6);
	box-shadow: 0px 1px 7px rgba(255, 255, 255, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	grid-area: card-source;
`;

const CardActionButton = styled.button`
	border-radius: 6px;
	border: none;
	color: #fff;
	cursor: pointer;
	display: block;
	font-family: "Orbitron", sans-serif;
	padding: 1rem;
	text-transform: uppercase;
	width: 130px;
	transition: all 0.1s ease-in;

	&.btn-demo {
		background: linear-gradient(302.2deg, #4cc9f0 -9.08%, rgba(76, 201, 240, 0.4) 83.6%);
		box-shadow: 1px -2px 1px var(--card-highlight);
	}

	&.btn-source {
		background: linear-gradient(302.2deg, #f72585 -9.08%, rgba(247, 37, 133, 0.4) 83.6%);
		box-shadow: 1px -2px 1px #e42580;
	}

	& i {
		font-size: 1rem;
		margin-right: 5px;
	}

	&:hover {
		filter: brightness(115%);
		transform: scale(1.1);
	}

	&:active {
		filter: brightness(85%);
	}
`;

const CardStackIcons = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	grid-area: 2 / 1 / 7 / 2;
`;

const SideIcon = styled.div`
	${GlassPanelNear}
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	box-shadow: none;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	opacity: 0.85;
	transition: all 0.1s ease-in;
	&:hover {
		opacity: 1;
		transform: scale(1.1);
	}
`;

const ReactSideIcon = styled(SideIcon)`
	color: var(--color-react);
	background: linear-gradient(160deg, transparent, var(--color-react) 200%);
`;

const NodejsSideIcon = styled(SideIcon)`
	color: var(--color-nodejs);
	background: linear-gradient(160deg, transparent, var(--color-nodejs) 200%);
`;

const ExpressSideIcon = styled(SideIcon)`
	color: var(--color-express);
	background: linear-gradient(160deg, transparent, var(--color-express) 200%);
`;

const FirebaseSideIcon = styled(SideIcon)`
	color: var(--color-firebase);
	background: linear-gradient(160deg, transparent, var(--color-firebase) 200%);
`;

const SideIconLabel = styled.div`
	color: #fff;
	font-family: "Jura", sans-serif;
	font-size: 0.7rem;
	min-height: 16px;
	text-align: center;
	transition: opacity 0.2s ease-in;
	opacity: 0;
	margin: 5px 0;
	${SideIcon}:hover + && {
		opacity: 1;
	}
`;

const Icon = styled.img`
	width: 80%;
`;

const ProjectCard = (props) => (
	<CardContainer>
		<CardBackground />
		<CardHeader>
			<TextTitle>Workout Logger</TextTitle>
			<TextSubtitle>Record reps, sets, and weights</TextSubtitle>
		</CardHeader>
		<CardImage src={ImageBarbell} />
		<CardFooter>
			<CardDescription>
				<OutlinedSection>
					<Description>
						Create custom, detailed exercises. Track your progress, get detailed summaries by muscle-group
						and exercise.
					</Description>
				</OutlinedSection>
			</CardDescription>
			<CardDemo>
				<CardActionButton className='btn-demo'>
					<i class='fa-solid fa-circle-play'></i>
					DEMO
				</CardActionButton>
			</CardDemo>
			<CardSource>
				<CardActionButton className='btn-source'>
					<i class='fa-brands fa-github'></i>
					SOURCE
				</CardActionButton>
			</CardSource>
		</CardFooter>
		<CardStackIcons>
			<ReactSideIcon>
				<Icon src={ReactIcon} />
			</ReactSideIcon>
			<SideIconLabel>React</SideIconLabel>

			<NodejsSideIcon>
				<Icon src={NodejsIcon} />
			</NodejsSideIcon>
			<SideIconLabel>NodeJS</SideIconLabel>

			<ExpressSideIcon>
				<Icon src={ExpressIcon} />
			</ExpressSideIcon>
			<SideIconLabel>Express.js</SideIconLabel>

			<FirebaseSideIcon>
				<Icon src={FirebaseIcon} />
			</FirebaseSideIcon>
			<SideIconLabel>Firebase</SideIconLabel>
		</CardStackIcons>
	</CardContainer>
);

export default ProjectCard;
