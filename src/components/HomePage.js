import React from "react";
import { Button, Container, Grid, Paper, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn } from "@material-ui/icons";

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
		color: "#a0a0a0",
		transition: "color 0.4s",
		"&:hover": {
			color: "#fff",
		},
	},
	navList: {
		display: "flex",
		justifyContent: "space-evenly",
		padding: "65px 0 40px",
		[theme.breakpoints.down("md")]: {
			padding: "40px 0px",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "20px 0px 25px",
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
				<Container maxWidth='md'>
					<FadeInText animationDelay={"6.5s"} animationDuration={"2s"}>
						<div className={classes.navList}>
							<a href='#skills-section' className={classes.navLink}>
								Skills
							</a>
							<a href='#projects-section' className={classes.navLink}>
								Projects
							</a>
							<a href='#about-me-section' className={classes.navLink}>
								About Me
							</a>
							<a href='#contact-section' className={classes.navLink}>
								Contact
							</a>
						</div>
					</FadeInText>
					<Grid container justify='center' alignItems='center'>
						<Grid item xs={6} sm={4}>
							<HeaderPhoto />
						</Grid>
					</Grid>
					<HeaderTitle />
					<FadeInText animationDelay={"6.5s"} animationDuration={"2s"}>
						<Typography variant='body1' align='left' color='inherit' paragraph>
							&nbsp;&nbsp;&nbsp;&nbsp;Hello, I’m Marshall. I'm an aspiring web and mobile developer in the
							Greater Toronto Area.
							<br />
							&nbsp;&nbsp;&nbsp;&nbsp;I studied Life Sciences and Computing at Queen’s University, and got
							a Bachelors degree for each. In addition to relevant courses taken, I’m a self-taught
							Node.js and React JS developer. I learned React to gain transferable skills and flexibility
							to interoperate between web and mobile app development, and will soon be venturing into
							React Native development.
						</Typography>
					</FadeInText>
					<div className={classes.heroButtons}>
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
					</div>
				</Container>
			</HeroBackground>
			<Container className={classes.sectionSpacing} maxWidth='md'>
				<Typography id='skills-section' variant='h3' align='center' className={classes.sectionHeader}>
					Skills
				</Typography>
				<Paper className={classes.paper}>
					<Grid container spacing={3} justify='space-evenly' alignItems='stretch'>
						<Grid item xs={12}>
							<Typography variant='h5' align='center' className={classes.subsectionHeader}>
								Languages
							</Typography>
						</Grid>
						<Tooltip title='HTML5' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={Html5Logo} altText={"HTML 5 Logo"} iconNum={1} />
							</Grid>
						</Tooltip>
						<Tooltip title='CSS3' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={Css3Logo} altText={"CSS 3 Logo"} iconNum={2} />
							</Grid>
						</Tooltip>
						<Tooltip title='Javascript' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={JavascriptLogo} altText={"Javascript Logo"} iconNum={3} />
							</Grid>
						</Tooltip>
						<Tooltip title='Python' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={PythonLogo} altText={"Python Logo"} iconNum={4} />
							</Grid>
						</Tooltip>
						<Tooltip title='Java' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={JavaLogo} altText={"Java Logo"} iconNum={5} />
							</Grid>
						</Tooltip>
					</Grid>
				</Paper>
				<Paper className={classes.paper}>
					<Grid container spacing={3} justify='space-evenly' alignItems='stretch'>
						<Grid item xs={12}>
							<Typography variant='h5' align='center' className={classes.subsectionHeader}>
								Frameworks
							</Typography>
						</Grid>
						<Tooltip title='React JS' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={ReactLogo} altText={"React Logo"} iconNum={1} />
							</Grid>
						</Tooltip>
						<Tooltip title='Redux' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={ReduxLogo} altText={"Redux Logo"} iconNum={2} />
							</Grid>
						</Tooltip>
						<Tooltip title='Express' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={ExpressLogo} altText={"Express Logo"} iconNum={3} />
							</Grid>
						</Tooltip>
						<Tooltip title='MongoDB' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={MongoDBLogo} altText={"MongoDB Logo"} iconNum={4} />
							</Grid>
						</Tooltip>
						<Tooltip title='Node.js' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={NodejsLogo} altText={"Node.js Logo"} iconNum={5} />
							</Grid>
						</Tooltip>
						<Tooltip title='Firebase' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={FirebaseLogo} altText={"Firebase Logo"} iconNum={6} />
							</Grid>
						</Tooltip>
					</Grid>
				</Paper>
				<Paper className={classes.paper}>
					<Grid container spacing={3} justify='space-evenly' alignItems='stretch'>
						<Grid item xs={12}>
							<Typography variant='h5' align='center' className={classes.subsectionHeader}>
								Libraries
							</Typography>
						</Grid>
						<Tooltip title='Handlebars' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' className={classes.logoBox}>
								<AnimatedIcon icon={HandlebarsLogo} altText={"Handlebars Logo"} iconNum={1} />
							</Grid>
						</Tooltip>
						<Tooltip title='Material-UI' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={MaterialUILogo} altText={"Material UI Logo"} iconNum={2} />
							</Grid>
						</Tooltip>
						<Tooltip title='Sass' placement='top'>
							<Grid item xs={6} sm={3} md={2} align='center' height='100%'>
								<AnimatedIcon icon={SassLogo} altText={"Sass Logo"} iconNum={3} />
							</Grid>
						</Tooltip>
					</Grid>
				</Paper>
			</Container>

			<div id='projects-section' className={classes.projectsSection}>
				<MatrixBG fps={30} />
				<Container className={classes.sectionSpacing} maxWidth='xl'>
					<Typography
						variant='h3'
						align='center'
						className={classes.sectionHeader}
						style={{ color: "#fff", position: "relative", pointerEvents: "none" }}
					>
						Projects
					</Typography>
					<Grid container spacing={4} justify='space-apart'>
						<Grid item xs={12} md={6} lg={4}>
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
						<Grid item xs={12} md={6} lg={4}>
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
						<Grid item xs={12} md={6} lg={4}>
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
						<Grid item xs={12} md={6} lg={4}>
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
						<Grid item xs={12} md={6} lg={4}>
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
					<strong>Email: </strong> ruse.marshall@gmail.com
				</Typography>
			</Container>
		</main>
	);
};

export default HomePage;
