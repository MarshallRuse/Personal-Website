import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Tooltip,
  Typography
 } from '@material-ui/core';
 import { GitHub, LinkedIn } from '@material-ui/icons';

// Logos
import { makeStyles } from '@material-ui/core/styles';
import Img from 'react-image';
import Html5Logo from '../assets/logos/html5.svg';
import Css3Logo from '../assets/logos/css3.svg';
import JavascriptLogo from '../assets/logos/javascript.svg';
import PythonLogo from '../assets/logos/python.svg';
import JavaLogo from '../assets/logos/java.svg';
import ReactLogo from '../assets/logos/react.svg';
import ReduxLogo from '../assets/logos/redux.svg';
import ExpressLogo from '../assets/logos/express.svg';
import MongoDBLogo from '../assets/logos/mongodb.svg';
import NodejsLogo from '../assets/logos/nodejs.svg';
import FirebaseLogo from '../assets/logos/firebase.svg';
import HandlebarsLogo from '../assets/logos/handlebars.svg';
import MaterialUILogo from '../assets/logos/material-ui.svg';
import SassLogo from '../assets/logos/sass.svg';

// Images
import SouthernOntario from '../assets/images/HomePage/SouthernOntario.png';
import CodeBackground from '../assets/images/HomePage/CodeBackground.png';
import PictureOfMe from '../assets/images/HomePage/PictureOfMe.jpg';
import WorkoutLoggerExerciseInstancePageUnilateralLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseInstancePageUnilateralLandscape.png';
import TripTrackerTripPageLandscape from '../assets/images/TripTracker/TripTrackerTripPageLandscape.png';
import BingoPartyHomePage from '../assets/images/BingoParty/BingoPartyHomePage.png';
import RoverFollowerMultipleFollowers from '../assets/images/RoverFollower/RoverFollowerMultipleFollowers.png'
import PersonalWebsite from '../assets/images/HomePage/PersonalWebsite.png';

const useStyles = makeStyles(theme => ({
    aboutMeParagraph: {
        color: '#4e4e4e',
        padding: '10px',
    },
    buttonBaseRoot: {
        display: 'flex',
        flexGrow: 1
    },
    captionText: {
        color: '#7d7d7d',
        paddingBottom: '10px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardRoot: {
        height: '100%'
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    heroContent: {
        backgroundImage: ['linear-gradient(to bottom, #2a2552, 60%, transparent)', `url(${ SouthernOntario })`],
        backgroundSize: 'cover',
        color: '#fff',
        minHeight: '100vh',
        padding: theme.spacing(8, 0, 10),
    },
    icon: {
        marginRight: theme.spacing(2),
      },
    inverseButton: {
        color: theme.palette.primary.main,
        backgroundColor: '#fff'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
    logoImg: {
        height: 'auto',
        width: '80%'
    },
    navLink: {
        textDecoration: 'none',
        color: '#a0a0a0',
        transition: 'color 0.4s',
        '&:hover': {
        color: '#fff'
    }
    },
    navList: {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingBottom: '40px'
    },
    paper: {
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            padding: '20px'
        },
        [theme.breakpoints.up('sm')]: {
            padding: '30px'
        }
    },
    paragraphHeader: {
        color: '#7d7d7d',
        padding: '20px'
    },
    profilePicture: {
        borderRadius: '50%',
        width: '100%'
    },
    projectsSection: {
        backgroundImage: ['linear-gradient(rgba(34,39,90,0.5), rgba(34,39,90,0.5))', `url(${ CodeBackground })`],
        backgroundSize: 'contain',
        minHeight: '100vh',
        padding: theme.spacing(8, 0, 10),
    },
    sectionHeader: {
        paddingTop: '10px',
        paddingBottom: '40px'
    },
    subsectionHeader: {
        paddingTop: '20px',
        paddingBottom: '20px'
    }
  }));

const HomePage = () => {

    const classes = useStyles();
    
    return (
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <div className={classes.navList}>
              <a href='#skills-section' className={classes.navLink}>Skills</a>
              <a href='#projects-section' className={classes.navLink}>Projects</a>
              <a href='#about-me-section' className={classes.navLink}>About Me</a>
              <a href='#contact-section' className={classes.navLink}>Contact</a>
            </div>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={6} sm={4}>
                    <Img src={PictureOfMe} className={classes.profilePicture}/>
                </Grid>
            </Grid>
            <Typography component="h1" variant="h2" align="center" color="inherit" gutterBottom>
              Marshall Ruse
            </Typography>
            <Typography variant="body1" align="left" color="inherit" paragraph>
                &nbsp;&nbsp;&nbsp;&nbsp;Hello, I’m Marshall. 
              I'm an aspiring web and mobile developer in the Greater Toronto Area.  
              <br />&nbsp;&nbsp;&nbsp;&nbsp;I studied Life Sciences and Computing at Queen’s University, and got a bachelor for each.  
              In addition to relevant courses taken, 
              I’m a self-taught Node.js and React JS developer.  
              I learned React to gain transferable skills and flexibility to interoperate between web 
              and mobile app development, and will soon be venturing into React Native development.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <a 
                        href='https://github.com/MarshallRuse' 
                        target='_blank'
                        rel="noopener noreferrer"
                        className={classes.link}
                    >
                        <Button variant="contained" color="primary">
                            <GitHub style={{marginRight: '5px'}} />
                            GitHub
                        </Button>
                    </a>
                </Grid>
                <Grid item>
                    <a 
                        href='https://www.linkedin.com/in/marshall-ruse-2b957a13b/' 
                        target='_blank'
                        rel="noopener noreferrer"
                        className={classes.link}
                    >
                        <Button variant="contained" className={classes.inverseButton}>
                            <LinkedIn style={{marginRight: '5px'}} />
                            LinkedIn
                        </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography 
                id='skills-section' 
                variant='h3' 
                align='center'
                className={classes.sectionHeader}
            >
                Skills
            </Typography>
            <Paper className={classes.paper} >
                <Grid container spacing={3} justify='space-evenly' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' className={classes.subsectionHeader}>
                            Languages
                        </Typography>
                    </Grid>
                    <Tooltip title='HTML5' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={Html5Logo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='CSS3' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={Css3Logo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Javascript' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={JavascriptLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Python' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={PythonLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Java' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={JavaLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                </Grid>
            </Paper>
            <Paper className={classes.paper} >
                <Grid container spacing={3} justify='space-evenly' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' className={classes.subsectionHeader}>
                            Frameworks
                        </Typography>
                    </Grid>
                    <Tooltip title='React JS' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={ReactLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Redux' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={ReduxLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Express' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={ExpressLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='MongoDB' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={MongoDBLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Node.js' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={NodejsLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Firebase' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={FirebaseLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                </Grid>
            </Paper>
            <Paper className={classes.paper} >
                <Grid container spacing={3} justify='space-evenly' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography variant='h5' align='center' className={classes.subsectionHeader}>
                            Libraries
                        </Typography>
                    </Grid>
                    <Tooltip title='Handlebars' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={HandlebarsLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Material-UI' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={MaterialUILogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                    <Tooltip title='Sass' placement='top'>
                        <Grid item xs={6} sm={3} md={2} align='center'>
                            <Img src={SassLogo} className={classes.logoImg} />
                        </Grid> 
                    </Tooltip>
                </Grid>
            </Paper>
        </Container>
        <div id='projects-section' className={classes.projectsSection}>
            <Container className={classes.cardGrid} maxWidth="md">
                <Typography 
                    id='skills-section' 
                    variant='h3' 
                    align='center'
                    className={classes.sectionHeader}
                    style={{color: '#fff'}}
                >
                    Projects
                </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card} classes={{ root: classes.cardRoot }}>
                        <ButtonBase component={Card} classes={{ root: classes.buttonBaseRoot }}>
                            <Link to='projects/WorkoutLogger' className={classes.link}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={WorkoutLoggerExerciseInstancePageUnilateralLandscape}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Fitness Journal (Mobile, In Progress)
                                    </Typography>
                                    <Typography variant='caption' className={classes.captionText}>
                                        <em>React, React Hooks, Material-UI, Firebase Authentication,
                                            Cloud Firestore</em> 
                                    </Typography>
                                    <Typography>
                                        Create custom, detailed exercises.  Track your progress, get detailed summaries
                                        by muscle-group and exercise.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </ButtonBase>
                        <CardActions className={classes.cardActions} >
                        <a 
                            href='https://marshalls-workout-logger.herokuapp.com/' 
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classes.link}
                        >
                            <Button size="small" color="primary">
                                Demo
                            </Button>
                        </a>
                        <a 
                            href='https://github.com/MarshallRuse/workout-logger' 
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classes.link}
                        >
                            <Button size="small" color="primary">
                                Source
                            </Button>
                        </a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card} classes={{ root: classes.cardRoot }}>
                        <ButtonBase component={Card} classes={{ root: classes.buttonBaseRoot }}>
                            <Link to='/projects/TripTracker' className={classes.link}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={TripTrackerTripPageLandscape}
                                    title="Trip Tracker Trips Page"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Trip Tracker (Mobile)
                                    </Typography>
                                    <Typography variant='caption' className={classes.captionText}>
                                        <em>React, React Hooks, Material-UI, Express, 
                                        MongoDB, Mongoose, Google Places API</em> 
                                    </Typography>
                                    <Typography variant='body2'>
                                        Add expenses in over 30 currencies. Convert between them with date-accurate 
                                        conversion rates. Summarize your trip expenses by date, category, city, and country.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </ButtonBase>       
                        <CardActions className={classes.cardActions} >
                            <a 
                                href='https://marshall-trip-tracker-app.herokuapp.com/' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className={classes.link}
                            >
                                <Button size="small" color="primary">
                                    Demo
                                </Button>
                            </a>
                            <a 
                                href='https://github.com/MarshallRuse/TripExpensesTracker'
                                target='_blank'
                                rel='noopener noreferrer' 
                                className={classes.link}
                            >
                                <Button size="small" color="primary">
                                    Source
                                </Button>
                            </a>
                        </CardActions>
                    </Card>  
                </Grid>
                <Grid item xs={12} sm={6} md={4}>    
                    <Card className={classes.card} classes={{ root: classes.cardRoot }}>
                        <ButtonBase component={Card} classes={{ root: classes.buttonBaseRoot }}>
                            <Link to='/projects/BingoParty' className={classes.link}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={BingoPartyHomePage}
                                    title="Bingo Party Home Page"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Bingo Party (Desktop)
                                    </Typography>
                                    <Typography variant='caption' className={classes.captionText}>
                                        <em>React, Redux, Express, Passport, JWT Authentication,
                                        MongoDB, Mongoose</em> 
                                    </Typography>
                                    <Typography>
                                        Create fun bingo games.  Play in your browser and save for later.
                                        Follow your favourite creators and be followed by others!
                                    </Typography>
                                </CardContent>
                            </Link>
                        </ButtonBase>
                        <CardActions className={classes.cardActions}>
                            <a 
                                href='https://marshall-bingo-party-app.herokuapp.com/' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className={classes.link}
                            >
                                <Button size="small" color="primary">
                                    Demo
                                </Button>
                            </a>
                            <a 
                                href='https://github.com/MarshallRuse/Bingo-App-React'
                                target='_blank'
                                rel='noopener noreferrer' 
                                className={classes.link}
                            >
                                <Button size="small" color="primary">
                                    Source
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card} classes={{ root: classes.cardRoot }}>
                        <ButtonBase component={Card} classes={{ root: classes.buttonBaseRoot }}>
                            <Link to='/projects/RoverFollower' className={classes.link}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={RoverFollowerMultipleFollowers}
                                    title="Rover Multiple Followers"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Rover Follower
                                    </Typography>
                                    <Typography variant='caption' className={classes.captionText}>
                                        <em>Python, Java, TCP Socket Communication</em> 
                                    </Typography>
                                    <Typography>
                                        Have one or more simulated rovers autonomously follow a leader rover
                                        on a random trajectory.  Tracking and coordination issued via TCP socket commands.
                                    </Typography>
                                </CardContent>
                            </Link>
                        </ButtonBase>
                        <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary">
                            Source
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}  classes={{ root: classes.cardRoot }}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={PersonalWebsite}
                            title="This website"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                This Website!
                            </Typography>
                            <Typography variant='caption' className={classes.captionText}>
                                <em>React, Material-UI</em> 
                            </Typography>
                            <Typography>
                                This very website, built with Material-UI and JSS-styled React components.
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Button size="small" color="primary">
                                Source
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </div>
        <Container id='about-me-section' className={classes.cardGrid} maxWidth="md">
            <Typography 
                id='skills-section' 
                variant='h3' 
                align='center'
                className={classes.sectionHeader}
            >
                About Me
            </Typography>
            <Paper className={classes.paper} >
                <Typography variant='h5' className={classes.paragraphHeader}>
                    Education
                </Typography>
                <Typography variant='body1' className={classes.aboutMeParagraph}>
                    &nbsp;&nbsp;&nbsp;&nbsp;I attended Queen's University in Kingston, Ontario from 2012 to 2019. 
                    <br /> 
                    <br />&nbsp;&nbsp;&nbsp;&nbsp;In the first four years I obtained a BScH in Life Sciences, with my primary
                    focus being on neurology.  In the last year of that degree I took a couple of introductory 
                    computer science courses, and ended up falling in love with the process of programming.  None of the courses
                    I'd taken previously would have me focused for hours and days, the time slipping by unnoticed as I became
                    enthralled by writing and piecing together functions to build small programs.  I had studied
                    the mechanisms and functions of numerous neurotransmitters, but learning about them hadn't quite given me the 
                    rush of dopamine that squashing that last bug and having a working final product did.  So, in my last year of 
                    that degree, I made the momentous decision to pursue programming as my passion in life.
                    <br />
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;Queen's offered an Honours degree in Computing with a Biomedical Computing specialization.  I saw this 
                    as a great oppurtunity to combine my previous love with my new passion, and to contextualize and reinforce my new 
                    learning with past domain-knowledge.  For the next three years, I took primarily computer science courses 
                    focused on algorithms, data-structures, and programming paradigms, as well as a few with cool life science
                    inflections (Bioinformatics and Computer-Integrated Surgery come to mind). In 2019, I graduated
                    with a BCmpH in Biomedical Computing.  
                </Typography>
                <Typography variant='h5' className={classes.paragraphHeader}>
                    Why am I doing Web and Mobile development?
                </Typography>
                <Typography variant='body1' className={classes.aboutMeParagraph}>
                    &nbsp;&nbsp;&nbsp;&nbsp;In my opinion, the internet is one of the most marvelous and powerful inventions in history.
                    It's probably not a controversial statement to say that the growing ubiquity and prevasiveness
                    of the internet finds us at the dawn of a new era of powerful global connectivity. My favourite 
                    aspects of studying neurology was learning how the various brain-systems connected and interacted to 
                    produce sensory perception, motor control, or animal behaviour.  The internet is analogous to a global
                    brain, with individual humans as the neurons trying to talk to each other.  Web and, ever-increasingly, 
                    mobile applications are the primary interfaces that each of us use to harness the amazing and powerful 
                    infrastructures of communication humanity has developed.  I want to be a builder of those interfaces.
                </Typography>
            </Paper>
        </Container>
        <Container id='contact-section' className={classes.cardGrid} maxWidth="md">
            <Typography 
                id='skills-section' 
                variant='h3' 
                align='center'
                className={classes.sectionHeader}
            >
                Contact
            </Typography>
            <Typography variant='h6' align='center'>
                <strong>Email: </strong> ruse.marshall@gmail.com
            </Typography>
        </Container>
      </main>
    );
} 

export default HomePage;