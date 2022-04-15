import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

// Logos
import {
    ExpressLogo,
    FirebaseLogo,
    JavaLogo,
    MaterialUILogo,
    MatplotlibLogo,
    MongoDBLogo,
    NodejsLogo,
    NumpyLogo,
    PythonLogo,
    ReactLogo,
    ReduxLogo,
    StyledComponentsLogo,
} from "../assets/logos/logoIcons.js";

// Images
import SouthernOntarioAnimatedSVG from "../assets/images/HomePage/svg/SouthernOntarioAnimated.svg";

// Sections
import AboutMeSection from "./AboutMeSection.js";
import BlogSection from "./BlogSection";
import SkillsSection from "./SkillsSection";

// Elements
import HeaderSubtitle from "./elements/HeaderSubtitle";
import NavBar from "./elements/NavBar";
import { NavLink, SectionTitle } from "./styles/styledComponents";
import HeroBackground from "./elements/HeroBackground";
import HeaderTitle from "./elements/HeaderTitle";
import FadeInText from "./elements/FadeInText";
import BounceInForwardElement from "./elements/BounceInForwardElement";
import MatrixBG from "./elements/MatrixBG";
import ProjectCard from "./elements/ProjectCard";

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

const ProjectBox = styled.div`
    display: flex;
    justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
    aboutMeParagraph: {
        color: "#4e4e4e",
        padding: "10px",
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    inverseButton: {
        color: theme.palette.primary.main,
        backgroundColor: "#fff",
    },
    link: {
        color: "inherit",
        textDecoration: "none",
    },
    projectBox: {
        display: "flex",
        justifyContent: "center",
    },
    projectsSection: {
        minHeight: "100vh",
        position: "relative",
    },
    sectionSpacing: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const HomePage = () => {
    const classes = useStyles();

    return (
        <main style={{ backgroundColor: "#000" }}>
            <FadeInText
                animationDelay={"6.5s"}
                animationDuration={"2s"}
                styling={{ position: "fixed", width: "100%", zIndex: 3 }}
            >
                <NavBar />
            </FadeInText>
            {/* Hero unit */}
            <HeroBackground
                backgroundImage='https://res.cloudinary.com/marsh/image/upload/f_auto,q_auto/v1649329689/portfolio/Home/SouthernOntario.png'
                backgroundSVG={SouthernOntarioAnimatedSVG}
            >
                <HeaderContainer>
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
                    <SectionTitle element='h3'>Projects</SectionTitle>
                    <Grid container spacing={4} justify='space-apart'>
                        <Grid item xs={12} md={6} lg={4} className={classes.projectBox}>
                            <ProjectCard
                                cardImage='Home/girl-barbell-curls'
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
                                cardImage='Home/cityscape-girl-night'
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
                                cardImage='Home/bingo'
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
                                cardImage='Home/curiosity-rover-mars'
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
                                cardImage='Home/PersonalWebsitePortrait'
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
            <AboutMeSection />
            <Container id='contact-section' className={classes.sectionSpacing} maxWidth='md'>
                <SectionTitle element='h3'>Contact</SectionTitle>
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
            </Container>
        </main>
    );
};

export default HomePage;
