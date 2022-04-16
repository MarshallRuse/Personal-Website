import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "color2k";
import { useInView } from "react-intersection-observer";
import { convertCSSVar } from "./styles/utils";
import useMediaQuery from "../hooks/useMediaQuery";
import { NavLink, SectionTitle, SubsectionTitle, TextContainer } from "./styles/styledComponents";
import breakpoints from "./styles/breakpoints";

const TextContainerMotion = motion(TextContainer);
//const SubsectionTitleMotion = motion(SubsectionTitle, { forwardMotionProps: true });
const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const AugmentedGlass = css`
	--aug-border-bg: rgba(255, 255, 255, 0.18);
	--aug-inlay-bg: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(4px);
`;

const Background = styled.div`
	background: linear-gradient(130deg, var(--color-blue-mid) 15%, var(--color-purple));
	padding: 4rem 0;
	width: 100%;
`;

const GlassPanelWrapper = styled.div`
	margin: 0 auto;
	position: relative;
	width: clamp(250px, 120ch, 100%);

	@media (max-width: ${breakpoints.sm}) {
		width: clamp(250px, 120ch, 90%);
	}
`;

const GlassPanel = styled.div`
	${AugmentedGlass}
	--aug-tl: 40px;
	--aug-tl-inset2: 37px;
	--aug-tl-inset1: 375px;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 2rem;
	width: 100%;
`;

const Tabs = styled.div`
	display: flex;
	gap: 5px;
	justify-content: center;
	margin-top: 20px;
	width: 90%;

	@media (min-width: ${breakpoints.sm}) {
		margin-top: 0;
		position: absolute;
		width: auto;
	}
`;

const ActiveTab = css`
	--aug-border-bg: ${lighten(`rgba(${convertCSSVar("var(--color-blue-light-raw)")}, 0.28)`, 0.3)};
	--aug-inlay-bg: ${lighten(`rgba(${convertCSSVar("var(--color-blue-light-raw)")}, 0.45)`, 0.3)};
`;

const RightTab = css`
	--aug-br: 33px;
`;

const GlassPanelTab = styled.div`
	${AugmentedGlass}
	${(props) => props.$rightTab && RightTab}
    ${(props) => props.$active && ActiveTab}
    color: #fff;
	cursor: pointer;
	flex: 1 0 50%;
	font-family: "Orbitron", sans-serif;
	min-width: 150px;
	padding: 1.5rem;
	text-align: center;

	@media (min-width: ${breakpoints.sm}) {
		min-width: 200px;
	}

	&::before {
		transition: all 0.2s ease-out;
	}

	&:hover {
		--aug-border-bg: ${(props) => !props.$active && "rgba(255, 255, 255, 0.28)"};
		--aug-inlay-bg: ${(props) => !props.$active && "rgba(255, 255, 255, 0.45)"};
	}
`;

const DatedLine = styled.p`
	display: flex;
	& .date {
		margin-left: auto;
	}
`;

const FadeDownText = ({ children }) => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
		//triggerOnce: true,
	});

	return (
		<motion.span
			ref={ref}
			variants={variants}
			initial='closed'
			animate={inView ? "open" : "closed"}
			style={{ display: "block" }}
		>
			{children}
		</motion.span>
	);
};

const AboutMeSection = () => {
	const largeScreen = useMediaQuery(`(min-width: ${breakpoints.sm})`);
	const [tabSelected, setTabSelected] = useState(0);

	return (
		<Background id='about-me-section'>
			<GlassPanelWrapper>
				{largeScreen && (
					<Tabs>
						<GlassPanelTab
							data-augmented-ui='both'
							$active={tabSelected === 0}
							onClick={() => setTabSelected(0)}
						>
							TL;DR
						</GlassPanelTab>
						<GlassPanelTab
							data-augmented-ui='br-clip both'
							$rightTab
							$active={tabSelected === 1}
							onClick={() => setTabSelected(1)}
						>
							Self-Indulgent
						</GlassPanelTab>
					</Tabs>
				)}

				<GlassPanel data-augmented-ui={`${largeScreen && "tl-clip-inset"} both`}>
					<SectionTitle element='h3' styling={{ paddingTop: "5rem", paddingBottom: 0 }}>
						About Me
					</SectionTitle>
					{!largeScreen && (
						<Tabs>
							<GlassPanelTab
								data-augmented-ui='both'
								$active={tabSelected === 0}
								onClick={() => setTabSelected(0)}
							>
								TL;DR
							</GlassPanelTab>
							<GlassPanelTab
								data-augmented-ui='both'
								$rightTab
								$active={tabSelected === 1}
								onClick={() => setTabSelected(1)}
							>
								Self-Indulgent
							</GlassPanelTab>
						</Tabs>
					)}
					<TextContainer
						$styling={{ color: "#fff", border: "1px solid rgba(255,255,255,0.5)", maxWidth: "90%" }}
					>
						<FadeDownText>
							<SubsectionTitle styling={{ textAlign: "left" }}>Education</SubsectionTitle>
						</FadeDownText>
						{tabSelected === 0 ? (
							<>
								<FadeDownText>
									<DatedLine>
										Queen's University - Kingston, Ontario{" "}
										<span className='date'>09-2012 - 04-2016</span>
									</DatedLine>
									<p
										style={{
											color: "var(--color-yellow)",
											fontWeight: 100,
											marginLeft: "2em",
											marginBottom: "2em",
										}}
									>
										Bachelor of Sciences, Honours - Life Science
									</p>
								</FadeDownText>
								<FadeDownText>
									<DatedLine>
										Queen's University - Kingston, Ontario
										<span className='date'>09-2016 - 04-2019</span>
									</DatedLine>
									<p
										style={{
											color: "var(--color-yellow)",
											fontWeight: 100,
											marginLeft: "2em",
											marginBottom: "2em",
										}}
									>
										Bachelor of Computing, Honours - Biomedical Computing
									</p>
								</FadeDownText>
							</>
						) : (
							<>
								<FadeDownText>
									<p>I attended Queen's University in Kingston, Ontario from 2012 to 2019.</p>
								</FadeDownText>
								<FadeDownText>
									<p>
										In the first four years I obtained a BScH in Life Sciences, with my primary
										focus being on neurology. In the last year of that degree I took a couple of
										introductory computer science courses, and ended up falling in love with
										programming. Finding myself completely engrossed, the time slipping-by unnoticed
										as I became enthralled by writing and piecing together functions to build small
										programs. I had studied neurotransmitters, but learning about them hadn't quite
										given me the dopamine-rush that squashing that last bug and having a working
										final product did. So, in my last year of that degree, I decided I needed to
										change course and pursue a career in software development.
									</p>
								</FadeDownText>
								<FadeDownText>
									<p>
										Queen's offered an Honours degree in Computing with a Biomedical Computing
										specialization. I saw this as a great oppurtunity to combine my previous love
										with my new passion, and to contextualize and reinforce my new learning with
										past domain-knowledge. For the next three years, I took primarily computer
										science courses focused on algorithms, data-structures, and programming
										paradigms, as well as a few with cool life science inflections (Bioinformatics
										and Computer-Integrated Surgery come to mind). In 2019, I graduated with a BCmpH
										in Biomedical Computing.
									</p>
								</FadeDownText>
							</>
						)}

						<FadeDownText>
							<SubsectionTitle>Why am I doing Web development?</SubsectionTitle>
						</FadeDownText>
						<p></p>
					</TextContainer>
				</GlassPanel>
			</GlassPanelWrapper>
		</Background>
	);
};

export default AboutMeSection;
