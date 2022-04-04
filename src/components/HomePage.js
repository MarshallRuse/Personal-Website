import React from "react";
import { Button, Container, Grid, Paper, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

import HeroBackground from "./elements/HeroBackground";
import HeaderPhoto from "./elements/HeaderPhoto";
import HeaderTitle from "./elements/HeaderTitle";
import FadeInText from "./elements/FadeInText";
import BounceInForwardElement from "./elements/BounceInForwardElement";
import AnimatedIcon from "./elements/AnimatedIcon";
import MatrixBG from "./elements/MatrixBG";
import ProjectCard from "./elements/ProjectCard";

// Logos

import {
	Css3Logo,
	ExpressLogo,
	FirebaseLogo,
	HandlebarsLogo,
	Html5Logo,
	JavaLogo,
	JavascriptLogo,
	MaterialUILogo,
	MatplotlibLogo,
	MongoDBLogo,
	NodejsLogo,
	NumpyLogo,
	PythonLogo,
	ReactLogo,
	ReduxLogo,
	SassLogo,
	StyledComponentsLogo,
} from "../assets/logos/logoIcons.js";

// Images
import BingoPartyImage from "../assets/images/bingo.jpg";
import PersonalWebsiteImage from "../assets/images/HomePage/PersonalWebsitePortrait.png";
import RoverFollowerImage from "../assets/images/curiosity-rover-mars.jpg";
import SouthernOntario from "../assets/images/HomePage/SouthernOntario.png";
import SouthernOntarioAnimatedSVG from "../assets/images/HomePage/svg/SouthernOntarioAnimated.svg";
import TripTrackerImage from "../assets/images/cityscape-girl-night.jpg";
import WorkoutLoggerImage from "../assets/images/girl-barbell-curls.jpg";
import BlogSection from "./BlogSection";
import HeaderSubtitle from "./elements/HeaderSubtitle";
import SkillsSection from "./SkillsSection";

const HeaderContainer = styled.div`
	width: 100%;
	max-width: 1280px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	padding-left: 16px;
	padding-right: 16px;

	@media (min-width: 600px) {
		padding-left: 24px;
		padding-right: 24px;
	}
`;

const HeaderSubtitleSection = styled.div`
	overflow: hidden;
	@media (max-width: 600px) {
		word-spacing: 100vw;
	}
`;

const HeroButtons = styled.div`
	justify-self: flex-end;
	flex: 0 0 0%;
	margin: 64px;
`;

const NavList = styled.nav`
	display: flex;
	justify-content: space-evenly;
	padding: 65px 0 40px;
	@media screen and (max-width: var(--breakpoints-md)) {
		padding: 40px 0px;
	}

	@media screen and (max-width: var(--breakpoints-sm)) {
		padding: 20px 0px 25px;
	}
`;

const NavLink = styled.a`
	color: ${(props) => (props.color ? props.color : "#fff")};
	display: inline-block;
	position: relative;
	text-decoration: none;
	transition: color 0.25s ease-out;

	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: var(--color-blue-light);
		height: 2px;
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
		width: 100%;
	}
	&:hover,
	&:focus {
		color: var(--color-blue-light);
	}
	&:hover:after,
	&:focus:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;

const useStyles = makeStyles((theme) => ({
	aboutMeParagraph: {
		color: "#4e4e4e",
		padding: "10px",
	},
	buttonBaseRoot: {
		alignItems: "flex-start",
		boxShadow: "none",
		display: "flex",
		flexGrow: 1,
	},
	captionText: {
		color: "#7d7d7d",
		paddingBottom: "10px",
	},

	heroButtons: {
		marginTop: theme.spacing(4),
	},
	heroContent: {
		backgroundImage: ["linear-gradient(to bottom, #2a2552, 60%, transparent)", `url(${SouthernOntario})`],
		backgroundSize: "cover",
		color: "#fff",
		minHeight: "100vh",
		padding: theme.spacing(8, 0, 10),
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	inverseButton: {
		color: theme.palette.primary.main,
		backgroundColor: "#fff",
	},
	link: {
		color: "inherit",
		textDecoration: "none",
	},
	logoBox: {
		display: "flex",
		flexDirection: "column",
	},
	logoImg: {
		height: "auto",
		width: "80%",
	},
	navLink: {
		textDecoration: "none",
		color: "#fff",
		transition: "color 0.4s",
		"&:hover": {
			color: "#fff",
		},
	},
	paper: {
		marginBottom: "20px",
		[theme.breakpoints.down("xs")]: {
			padding: "20px",
		},
		[theme.breakpoints.up("sm")]: {
			padding: "30px",
		},
	},
	paragraphHeader: {
		color: "#7d7d7d",
		padding: "20px",
	},
	profilePicture: {
		borderRadius: "50%",
		width: "100%",
	},
	projectBox: {
		display: "flex",
		justifyContent: "center",
	},
	projectsSection: {
		minHeight: "100vh",
		position: "relative",
	},
	sectionHeader: {
		fontFamily: "'Orbitron', sans-serif",
		paddingTop: "1em",
		paddingBottom: "2em",
	},
	sectionSpacing: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	subsectionHeader: {
		paddingTop: "20px",
		paddingBottom: "20px",
	},
}));

const HomePage = () => {
	const classes = useStyles();

	return (
		<main>
			{/* Hero unit */}
			<HeroBackground backgroundImage={SouthernOntario} backgroundSVG={SouthernOntarioAnimatedSVG}>
				<HeaderContainer>
					<FadeInText animationDelay={"6.5s"} animationDuration={"2s"}>
						<NavList>
							<NavLink href='#skills-section'>Skills</NavLink>
							<NavLink href='#projects-section'>Projects</NavLink>
							<NavLink href='#blog-section'>Blog</NavLink>
							<NavLink href='#about-me-section'>About Me</NavLink>
							<NavLink href='#contact-section'>Contact</NavLink>
						</NavList>
					</FadeInText>
					<HeaderTitle />
					<HeaderSubtitleSection>
						<FadeInText animationDelay={"6.5s"} animationDuration={"2s"}>
							<HeaderSubtitle />
						</FadeInText>
					</HeaderSubtitleSection>

					<HeroButtons className='heroButtons'>
						<Grid container spacing={2} justify='center'>
							<Grid item>
								<BounceInForwardElement animationDelay={"7s"}>
									<a
										href='https://github.com/MarshallRuse'
										target='_blank'
										rel='noopener noreferrer'
										className={classes.link}
									>
										<Button variant='contained' color='primary'>
											<GitHub style={{ marginRight: "5px" }} />
											GitHub
										</Button>
									</a>
								</BounceInForwardElement>
							</Grid>
							<Grid item>
								<BounceInForwardElement animationDelay={"7.2s"}>
									<a
										href='https://www.linkedin.com/in/marshall-ruse/'
										target='_blank'
										rel='noopener noreferrer'
										className={classes.link}
									>
										<Button variant='contained' className={classes.inverseButton}>
											<LinkedIn style={{ marginRight: "5px" }} />
											LinkedIn
										</Button>
									</a>
								</BounceInForwardElement>
							</Grid>
						</Grid>
					</HeroButtons>
				</HeaderContainer>
			</HeroBackground>
			<SkillsSection />
			<div id='projects-section' className={classes.projectsSection}>
				<MatrixBG fps={30} />
				<Container className={classes.sectionSpacing} maxWidth='xl' style={{ paddingTop: "360px" }}>
					<Typography
						variant='h3'
						align='center'
						className={classes.sectionHeader}
						style={{ color: "#fff", position: "relative", pointerEvents: "none" }}
					>
						Projects
					</Typography>
					<Grid container spacing={4} justify='space-apart'>
						<Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
							<ProjectCard
								cardImage={WorkoutLoggerImage}
								cardTitle='Workout Logger'
								cardSubtitle='Record reps, sets, and weights'
								projectPageLink='projects/WorkoutLogger'
								demoLink='https://marshalls-workout-logger.herokuapp.com/'
								sourceLink='https://github.com/MarshallRuse/workout-logger'
								stackIcons={[
									{ class: "react", icon: ReactLogo },
									{ class: "nodejs", icon: NodejsLogo },
									{ class: "express", icon: ExpressLogo },
									{ class: "firebase", icon: FirebaseLogo },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
							<ProjectCard
								cardImage={TripTrackerImage}
								cardTitle='Trip Tracker'
								cardSubtitle='Track expenses in 30 currencies'
								projectPageLink='projects/TripTracker'
								demoLink='https://marshall-trip-tracker-app.herokuapp.com/'
								sourceLink='https://github.com/MarshallRuse/TripExpensesTracker'
								stackIcons={[
									{ class: "react", icon: ReactLogo },
									{ class: "materialui", icon: MaterialUILogo },
									{ class: "express", icon: ExpressLogo },
									{ class: "nodejs", icon: NodejsLogo },
									{ class: "mongodb", icon: MongoDBLogo },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
							<ProjectCard
								cardImage={BingoPartyImage}
								cardTitle='Bingo Party'
								cardSubtitle='Bingo in a browser'
								projectPageLink='/projects/BingoParty'
								demoLink='https://marshall-bingo-party-app.herokuapp.com/'
								sourceLink='https://github.com/MarshallRuse/Bingo-App-React'
								stackIcons={[
									{ class: "react", icon: ReactLogo },
									{ class: "redux", icon: ReduxLogo },
									{ class: "express", icon: ExpressLogo },
									{ class: "nodejs", icon: NodejsLogo },
									{ class: "mongodb", icon: MongoDBLogo },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
							<ProjectCard
								cardImage={RoverFollowerImage}
								cardTitle='Rover Follower'
								cardSubtitle='Automated convoy of simulated Mars rovers'
								projectPageLink='/projects/RoverFollower'
								demoLink='https://youtu.be/mospnG-yyUk'
								sourceLink='https://github.com/MarshallRuse/Rover-Follower-Challenge'
								stackIcons={[
									{ class: "python", icon: PythonLogo },
									{ class: "numpy", icon: NumpyLogo },
									{ class: "matplotlib", icon: MatplotlibLogo },
									{ class: "java", icon: JavaLogo },
								]}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
							<ProjectCard
								cardImage={PersonalWebsiteImage}
								cardTitle='marshallruse.com'
								cardSubtitle='This website!'
								sourceLink='https://github.com/MarshallRuse/Personal-Website'
								stackIcons={[
									{ class: "react", icon: ReactLogo },
									{ class: "materialui", icon: MaterialUILogo },
									{ class: "styledcomponents", icon: StyledComponentsLogo },
								]}
							/>
						</Grid>
					</Grid>
				</Container>
			</div>
			<BlogSection />
			<Container id='about-me-section' className={classes.sectionSpacing} maxWidth='md'>
				<Typography id='skills-section' variant='h3' align='center' className={classes.sectionHeader}>
					About Me
				</Typography>
				<Paper className={classes.paper}>
					<Typography variant='h5' className={classes.paragraphHeader}>
						Education
					</Typography>
					<Typography variant='body1' className={classes.aboutMeParagraph}>
						&nbsp;&nbsp;&nbsp;&nbsp;I attended Queen's University in Kingston, Ontario from 2012 to 2019.
						<br />
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;In the first four years I obtained a BScH in Life Sciences, with my
						primary focus being on neurology. In the last year of that degree I took a couple of
						introductory computer science courses, and ended up falling in love with the process of
						programming. None of the courses I'd taken previously would have me focused for hours and days,
						the time slipping by unnoticed as I became enthralled by writing and piecing together functions
						to build small programs. I had studied the mechanisms and functions of numerous
						neurotransmitters, but learning about them hadn't quite given me the rush of dopamine that
						squashing that last bug and having a working final product did. So, in my last year of that
						degree, I made the momentous decision to pursue programming as my passion in life.
						<br />
						<br /> &nbsp;&nbsp;&nbsp;&nbsp;Queen's offered an Honours degree in Computing with a Biomedical
						Computing specialization. I saw this as a great oppurtunity to combine my previous love with my
						new passion, and to contextualize and reinforce my new learning with past domain-knowledge. For
						the next three years, I took primarily computer science courses focused on algorithms,
						data-structures, and programming paradigms, as well as a few with cool life science inflections
						(Bioinformatics and Computer-Integrated Surgery come to mind). In 2019, I graduated with a BCmpH
						in Biomedical Computing.
					</Typography>
					<Typography variant='h5' className={classes.paragraphHeader}>
						Why am I doing Web and Mobile development?
					</Typography>
					<Typography variant='body1' className={classes.aboutMeParagraph}>
						&nbsp;&nbsp;&nbsp;&nbsp;In my opinion, the internet is one of the most marvelous and powerful
						inventions in history. It's probably not a controversial statement to say that the growing
						ubiquity and prevasiveness of the internet finds us at the dawn of a new era of powerful global
						connectivity. My favourite aspects of studying neurology was learning how the various
						brain-systems connected and interacted to produce sensory perception, motor control, or animal
						behaviour. The internet is analogous to a global brain, with individual humans as the neurons
						trying to talk to each other. Web and, ever-increasingly, mobile applications are the primary
						interfaces that each of us use to harness the amazing and powerful infrastructures of
						communication humanity has developed. I want to be a builder of those interfaces.
					</Typography>
				</Paper>
			</Container>
			<Container id='contact-section' className={classes.sectionSpacing} maxWidth='md'>
				<Typography id='skills-section' variant='h3' align='center' className={classes.sectionHeader}>
					Contact
				</Typography>
				<Typography variant='h6' align='center'>
					<NavLink
						href='mailto:ruse.marshall@gmail.com'
						color='var(--color-blue-mid)'
						style={{
							display: "flex",
							gap: "10px",
							alignItems: "center",
							margin: "0 auto",
							width: "max-content",
						}}
					>
						<Email />
						ruse.marshall@gmail.com
					</NavLink>
				</Typography>
			</Container>
		</main>
	);
};

export default HomePage;
