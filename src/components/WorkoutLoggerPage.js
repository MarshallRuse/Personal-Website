import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Dialog,
    DialogContent,
    Grid, 
    Paper,
    Tooltip,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, Close, GitHub } from '@material-ui/icons';
import Img from 'react-image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Images
import WorkoutLoggerAuthPage from '../assets/images/WorkoutLogger/WorkoutLoggerAuthPage.png';
import WorkoutLoggerAuthPageLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerAuthPageLandscape.png';
import WorkoutLoggerWorkoutsPage from '../assets/images/WorkoutLogger/WorkoutLoggerWorkoutsPage.png';
import WorkoutLoggerWorkoutsPageLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerWorkoutsPageLandscape.png';
import WorkoutLoggerExerciseCreation from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseCreation.png';
import WorkoutLoggerExerciseCreationLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseCreationLandscape.png';
import WorkoutLoggerExerciseInstancePageOptions from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseInstancePageOptions.png';
import WorkoutLoggerExerciseInstancePageOptionsLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseInstancePageOptionsLandscape.png';
import WorkoutLoggerExerciseInstancePageUnilateral from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseInstancePageUnilateral.png';
import WorkoutLoggerExerciseInstancePageUnilateralLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerExerciseInstancePageUnilateralLandscape.png';
import WorkoutLoggerExercisesPage from '../assets/images/WorkoutLogger/WorkoutLoggerExercisesPage.png';
import WorkoutLoggerExercisesPageLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerExercisesPageLandscape.png';
import WorkoutLoggerWorkoutInstancePage from '../assets/images/WorkoutLogger/WorkoutLoggerWorkoutInstancePage.png';
import WorkoutLoggerWorkoutInstancePageLandscape from '../assets/images/WorkoutLogger/WorkoutLoggerWorkoutInstancePageLandscape.png';

import workoutBackground from '../assets/images/WorkoutLogger/workoutBackground.jpg';
import curlBackground from '../assets/images/WorkoutLogger/curlBackground.jpg';
import gymBackground from '../assets/images/WorkoutLogger/gymBackground.jpg';
import dumbbellsBackground from '../assets/images/WorkoutLogger/dumbbellsBackground.jpg';

// Logos
import ReactLogo from '../assets/logos/react.svg';
import MaterialUILogo from '../assets/logos/material-ui.svg';
import FirebaseLogo from '../assets/logos/firebase.svg';


const useStyles = makeStyles(theme => ({
    closeDialogButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: '10px', 
        width: '100%'
    },
    developmentSectionBackground: {
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${ workoutBackground })`,
        },
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${ curlBackground })`,
            backgroundPositionX: 'center'
        },
        backgroundSize: 'cover'
    },
    img: {
        height: '50%',
        width: 'auto'
    },
    link: {
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        textDecoration: 'none',
        width: '100%'
    },
    linkRow: {
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        padding: '10px',
        textDecoration: 'none',
    },
    linkRow__leftLink: {
        justifyContent: 'flex-end',
        paddingRight: '10px'
    },
    linkRow__rightLink: {
        justifyContent: 'flex-start',
        paddingLeft: '10px'
    },
    listText: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    logoImg: {
        height: 'auto',
        width: '80%'
    },
    logoRow: {
        backgroundColor: '#fff',
        paddingBottom: '20px',
        paddingTop: '20px'
    },
    outsidePaperText: {
        padding: '50px'
    },
    pageText: {
        padding: '20px'
    },
    paper: {
        backgroundColor: `rgba(0,0,0,0.7)`,
        color: '#fff',
        padding: '10px',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            margin: '30px'
        },
        [theme.breakpoints.up('sm')]: {
            margin: '80px'
        }
    },
    slideShowBackground: {
        backgroundImage: ['linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5))', `url(${ dumbbellsBackground })`],
        backgroundSize: 'cover',
    },
    featuresBackground: {
        backgroundImage: `url(${ gymBackground })`,
        backgroundSize: 'cover'
    },
    titleRow: {
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
    }
}));

const images = {
    WorkoutLoggerAuthPage,
    WorkoutLoggerWorkoutsPage,
    WorkoutLoggerExerciseCreation,
    WorkoutLoggerExerciseInstancePageOptions,
    WorkoutLoggerExerciseInstancePageUnilateral,
    WorkoutLoggerExercisesPage,
    WorkoutLoggerWorkoutInstancePage
}

const WorkoutLoggerPage = () => {
    const classes = useStyles();

    const [clickedImage, setClickedImage] = useState('');
    const [clickedImageAlt, setClickedImageAlt] = useState('');
    const [imageDialogOpen, setImageDialogOpen] = useState(false);

    const handleCarouselImageClicked = (index, element) => {
        const imageName = element.props.children[0].props.image;
        const imageAlt = element.props.children[0].props.alt;
        setClickedImage(images[imageName]);
        setClickedImageAlt(imageAlt);
        setImageDialogOpen(true);
    }

    const handleCloseImageDialog = () => {
        setClickedImage('');
        setClickedImageAlt('');
        setImageDialogOpen(false);
    }


    return (
        <>
            <div className={classes.slideShowBackground}>
                <Grid container justify='center'>
                    <Grid item xs={3} className={classes.titleRow}>
                        <Link to='/' className={classes.link} >
                            <ArrowBack />
                        </Link>
                    </Grid>
                    <Grid item xs={6} className={classes.titleRow}>
                        <Typography variant='h4' align='center'>
                            Workout Logger App
                        </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} className={classes.linkRow}>
                        <a 
                            href='https://marshalls-workout-logger.herokuapp.com/' 
                            target='_blank'
                            rel='noopener noreferrer'
                            className={[classes.link, classes.linkRow__leftLink].join(' ')}
                        >
                            <Button variant='contained' style={{minWidth: '123px'}}>
                                Demo
                            </Button>
                        </a>
                        <a 
                            href='https://github.com/MarshallRuse/workout-logger'
                            target='_blank'
                            rel='noopener noreferrer' 
                            className={[classes.link, classes.linkRow__rightLink].join(' ')}
                        >
                            <Button variant='contained' style={{minWidth: '123px'}} >
                                <GitHub style={{marginRight: '5px'}} />
                                Source
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={10} md={9}>
                        <Carousel 
                            autoPlay 
                            interval={5000} 
                            transitionTime={500} 
                            showStatus={false}
                            onClickItem={handleCarouselImageClicked}
                        >
                            <div >
                                <img 
                                    src={WorkoutLoggerAuthPageLandscape} 
                                    image='WorkoutLoggerAuth'
                                    alt='The authorization page for the app' 
                                    className={classes.img}    
                                />
                                <p className="legend">The Sign-Up and Login Page for the app</p>
                            </div>
                            <div>
                                <img 
                                    src={WorkoutLoggerWorkoutsPageLandscape}
                                    image='WorkoutLoggerWorkoutsPage' 
                                    alt='The main workouts page' 
                                    className={classes.img}
                                />
                                <p className="legend">All of your workouts, sorted by date</p>
                            </div>
                            <div>
                                <img 
                                    src={WorkoutLoggerWorkoutInstancePageLandscape} 
                                    image='WorkoutLoggerWorkoutInstancePage'
                                    alt="The workout instance page" 
                                    className={classes.img}/>
                                <p className="legend">The page displaying exercises completed for each workout</p>
                            </div>
                            <div>
                                <img 
                                    src={WorkoutLoggerExerciseInstancePageUnilateralLandscape}
                                    image='WorkoutLoggerExerciseInstanceUnilateralPage' 
                                    alt='The exercise instance page' 
                                    className={classes.img}
                                />
                                <p className="legend">The page for each exercise instance - this example is
                                a unilateral exercise (both left- and right-side sets)</p>
                            </div>
                            <div>
                                <img 
                                    src={WorkoutLoggerExerciseInstancePageOptionsLandscape} 
                                    image='WorkoutLoggerExerciseInstancePageOptions'
                                    alt="The options for adding sets" 
                                    className={classes.img}
                                />
                                <p className="legend">Each set can be labelled left and right, and the units can
                                be changed on the fly</p>
                            </div>
                            <div>
                                <img 
                                    src={WorkoutLoggerExercisesPageLandscape} 
                                    image='WorkoutLoggerExercisesPage'
                                    alt="The exercises page" 
                                    className={classes.img}
                                />
                                <p className="legend">Each account starts with a default set of exercises that can be edited, 
                                added to, and deleted from</p>
                            </div>
                            <div>
                                <img 
                                    src={WorkoutLoggerExerciseCreationLandscape} 
                                    image='WorkoutLoggerExerciseCreation'
                                    alt="The add exercise dialog" 
                                    className={classes.img}
                                />
                                <p className="legend">Add new exercises, customized to your needs</p>
                            </div>
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant='body1'className={classes.outsidePaperText}>
                    I've used a number of different workout logging apps (and even physical workout journals, once upon a time), 
                    and, while they all have their pros and cons, they’ve never been quite perfect for me. Situations like needing
                    to easily identify which side of the body some exercises were performed on, or being able to switch easily between
                    weights in pounds and kilos, often require cumbersome workarounds.  
                    Its been a goal of mine since beginning my web-development journey to build an app that fits my needs on a day-to-day basis. 
                    This app is (the beginning of) my attempt to craft that myself. 
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.featuresBackground}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <Typography variant='h5' align='center' className={classes.pageText}>
                            Features
                        </Typography>
                        <Typography variant='body1' className={classes.pageText}>
                            <em>Workout Logger</em> is a no-frills, straight-forward, strength-training record-keeping app.
                            Version 1.0 of the app is admittedly a bit bare-bones at the moment, but it performs its
                            primary functions, and, since I plan to make use of this app (and eventually port it to a native-mobile application),
                            it will continue to be updated with new features. 
                            <br />
                            <br />
                            The list of current features include:
                        </Typography>
                            <ul>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Add to and customize a provided list of exercises, sorted by muscle group.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Distinguish between unilateral and bilateral exercises, tracking the weight and reps for 
                                        each side of the exercise performed.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Change on the fly between imperial and metric weight units.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        View at a glance the number of exercises performed for each exercise, as well as its total duration. 
                                    </Typography>
                                </li>
                            </ul>
                            <Typography variant='body1' className={classes.pageText}>
                                The list of planned features include:
                            </Typography>
                            <ul>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        View your previous workouts stats for each exercise, per set, on its sets-page, to immediately know your
                                        goal to beat.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Search exercises by title.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Visualize your progress with each exercise , by One-Rep Max or by total volume.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Sort by most and least used exercises per muscle-group to see which are your favourite exercises, and how to add some var your workout.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        Add, edit, and delete muscle-groups and equipment.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        A robust user account section, in which users can view stats such as their total number of workouts,
                                        number of unique exercises performed, largest weight and volume per muscle-group, etc.
                                    </Typography>
                                </li>
                            </ul>                   
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.developmentSectionBackground}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant='h5' align='center' className={classes.pageText}>
                                Development
                            </Typography>
                            <Grid container justify='center' alignItems='center' className={classes.logoRow}>
                                <Tooltip title='React JS' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={ReactLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='Material UI' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={MaterialUILogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                                <Tooltip title='Firebase' placement='top'>
                                    <Grid item xs={6} sm={3} md={2} align='center'>
                                        <Img src={FirebaseLogo} className={classes.logoImg} />
                                    </Grid> 
                                </Tooltip>
                            </Grid>
                            <Typography variant='body1' className={classes.pageText}>
                                <em>Workout Logger</em> is developed as a <strong>React</strong> app using Google's <strong>Firebase</strong> web and mobile
                                platform as a backend for authentication and storage (<strong>Cloud Firestore</strong>).  
                            </Typography>
                            <Typography variant='h6' align='center' className={classes.pageText}>Front-End</Typography>
                            <Typography variant='body1' className={classes.pageText}>
                                The React front-end primarily utilizes components from <strong>Material UI</strong>, a component library implementing Google’s Material Design visual language.  
                                Where components need more custom styling, Material UI’s supported <strong>JSS</strong> styling solutions are used.  
                                The front-end combines the use of Reacts traditional class structure (for the pages) and <strong>React Hooks</strong> for the more elemental components. <strong>React’s Context API</strong> is used for routing flags and to provide
                                lateral communication amongst nested components.  
                                <em>Workout Logger</em> is a <strong>single-page application</strong>, as it uses <strong>React Router</strong> as its routing solution, only fetching the index html page on initial loading.
                                <br />
                            </Typography>
                            <Typography variant='h6' align='center' className={classes.pageText}>Back-End</Typography>
                            <Typography variant='body1' className={classes.pageText}>
                                The back-end is a bare-bones<strong>Node.js</strong> server that returns the index.html file from any location, making <em>Workout Logger</em> 
                                a single-page application.  
                                Google's <strong>Firebase</strong> web and mobile development service is used for the authentication middleware, and for storage via their <strong>Cloud Firestore</strong> service.  
                                The services are interacted with directly from the front-end, with the component pages and elements using Firebase's web and mobile client SDK.  
                                The data structure of the Firestore storage is a combination of the <em>subcollection</em> and <em>root-level collection</em> patterns
                                <a 
                                    href='https://firebase.google.com/docs/firestore/manage-data/structure-data' 
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    style={{color: 'cornflowerblue', textDecoration: 'none'}}
                                >
                                    &nbsp;described by the Firestore documentation
                                </a>, depending on which pattern makes contextual sense.  For instance, all collections
                                are subcollections of the particular <em>user</em> documents to which they are assigned, and <em>sets</em> are subcollections of the <em>exercise instances</em>
                                to which they are assigned, but <em>workouts</em>, <em>exercises</em>, and <em>exercise instances</em> are root-level collections that refer to 
                                each other for ease of access and manipulation.  
                            </Typography>
                        </Paper>
                        <div className={classes.toolbar} />
                    </Grid>
                </Grid>
            </div>
            <Dialog 
                open={imageDialogOpen} 
                onClose={handleCloseImageDialog}
            >
                <DialogContent>
                    <div className={classes.closeDialogButton} >
                        <Close onClick={handleCloseImageDialog} />
                    </div>
                    <img 
                        src={clickedImage} 
                        alt={clickedImageAlt} 
                        style={{ width: '100%' }}
                    />
                </DialogContent>
            </Dialog>
        </>
    
    )
}

export default WorkoutLoggerPage;