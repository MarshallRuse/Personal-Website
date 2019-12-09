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
import TripTrackerTripPageLandscape from '../assets/images/TripTracker/TripTrackerTripPageLandscape.png';
import TripTrackerTripPage from '../assets/images/TripTracker/TripTrackerTripPage.png';
import TripTrackerAddTripLandscape from '../assets/images/TripTracker/TripTrackerAddTripLandscape.png';
import TripTrackerAddTrip from '../assets/images/TripTracker/TripTrackerAddTrip.png';
import TripTrackerExpensesPageLandscape from '../assets/images/TripTracker/TripTrackerExpensesPageLandscape.png';
import TripTrackerExpensesPage from '../assets/images/TripTracker/TripTrackerExpensesPage.png';
import TripTrackerAddExpenseLandscape from '../assets/images/TripTracker/TripTrackerAddExpenseLandscape.png';
import TripTrackerAddExpense from '../assets/images/TripTracker/TripTrackerAddExpense.png';
import TripTrackerDateSelectionLandscape from '../assets/images/TripTracker/TripTrackerDateSelectionLandscape.png';
import TripTrackerDateSelection from '../assets/images/TripTracker/TripTrackerDateSelection.png';
import TripTrackerLocationAutocompleteLandscape from '../assets/images/TripTracker/TripTrackerLocationAutocompleteLandscape.png';
import TripTrackerLocationAutocomplete from '../assets/images/TripTracker/TripTrackerLocationAutocomplete.png';
import TripTrackerSortLandscape from '../assets/images/TripTracker/TripTrackerSortLandscape.png';
import TripTrackerSort from '../assets/images/TripTracker/TripTrackerSort.png';
import TripTrackerTripSummaryLandscape from '../assets/images/TripTracker/TripTrackerTripSummaryLandscape.png';
import TripTrackerTripSummary from '../assets/images/TripTracker/TripTrackerTripSummary.png';

import globeBackground from '../assets/images/TripTracker/globeBackground.jpg';
import travelThingsBackground from '../assets/images/TripTracker/travelThingsBackground.jpg';
import mapsBackground from '../assets/images/TripTracker/mapsBackground.jpg';

// Logos
import ReactLogo from '../assets/logos/react.svg';
import MaterialUILogo from '../assets/logos/material-ui.svg';
import ExpressLogo from '../assets/logos/express.svg';
import MongoDBLogo from '../assets/logos/mongodb.svg';
import NodejsLogo from '../assets/logos/nodejs.svg';


const useStyles = makeStyles(theme => ({
    closeDialogButton: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: '10px', 
        width: '100%'
    },
    developmentSectionBackground: {
        backgroundImage: `url(${ globeBackground })`,
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
        backgroundImage: ['linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5))', `url(${ mapsBackground })`],
        backgroundSize: 'cover',
    },
    featuresBackground: {
        backgroundImage: `url(${ travelThingsBackground })`,
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
    TripTrackerTripPage,
    TripTrackerAddTrip,
    TripTrackerExpensesPage,
    TripTrackerAddExpense,
    TripTrackerDateSelection,
    TripTrackerLocationAutocomplete,
    TripTrackerSort,
    TripTrackerTripSummary
}

const TripTrackerPage = () => {
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
                            Trip Tracker App
                        </Typography>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} className={classes.linkRow}>
                        <a 
                            href='https://marshall-trip-tracker-app.herokuapp.com/' 
                            target='_blank'
                            rel='noopener noreferrer'
                            className={[classes.link, classes.linkRow__leftLink].join(' ')}
                        >
                            <Button variant='contained' style={{minWidth: '123px'}}>
                                Demo
                            </Button>
                        </a>
                        <a 
                            href='https://github.com/MarshallRuse/TripExpensesTracker'
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
                                    src={TripTrackerTripPageLandscape} 
                                    image='TripTrackerTripPage'
                                    alt='The Trips dashboard page' 
                                    className={classes.img}    
                                />
                                <p className="legend">The trips dashboard page</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerAddTripLandscape}
                                    image='TripTrackerAddTrip' 
                                    alt='The add trip dialog' 
                                    className={classes.img}
                                />
                                <p className="legend">Add a new trip.  Give it a title, a preferred currency for summaries,
                                and choose categories for your expenses (can be edited at any time)</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerExpensesPageLandscape} 
                                    image='TripTrackerExpensesPage'
                                    alt="The trips's expenses page" 
                                    className={classes.img}/>
                                <p className="legend">The expenses page for each trip</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerAddExpenseLandscape}
                                    image='TripTrackerAddExpense' 
                                    alt='The add expense dialog' 
                                    className={classes.img}
                                />
                                <p className="legend">The data to track for each expense</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerDateSelectionLandscape} 
                                    image='TripTrackerDateSelection'
                                    alt="The add expense dialog's date selection widget" 
                                    className={classes.img}
                                />
                                <p className="legend">Date selection done via a Material UI widget</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerLocationAutocompleteLandscape} 
                                    image='TripTrackerLocationAutocomplete'
                                    alt="The add expense dialog's location autocomplete functionality" 
                                    className={classes.img}
                                />
                                <p className="legend">Fill in location data with a Google Places business or city search</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerSortLandscape} 
                                    image='TripTrackerSort'
                                    alt="The sorting functionality for the expenses page" 
                                    className={classes.img}
                                />
                                <p className="legend">Sort your expenses (and trips) on a variety of metrics</p>
                            </div>
                            <div>
                                <img 
                                    src={TripTrackerTripSummaryLandscape} 
                                    image='TripTrackerTripSummary'
                                    alt="The trip summary drawer summarizing expenses by various categories" 
                                    className={classes.img}
                                />
                                <p className="legend">Receive a summary of your trip's expenses, broken down by multiple
                                metrics, in your preferred currency</p>
                            </div>
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant='body1'className={classes.outsidePaperText}>
                        <em>Trip Tracker</em> arose out of a desire to organize and summarize all of our expense information from a recent
                        trip abroad.  While there are countless expense-tracking apps out there, I chose the much less
                        efficient - but ultimately more rewarding - route of creating my own.
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
                            <em>Trip Tracker</em> acts as a summarizer for each of your trips expenses. For each trip,
                            a preferred (eg. home) currency can be set, with which all of the expenses entered therein will 
                            converted to.  
                            <br />
                            <br />
                            For each expense, a user may enter a number of metrics, a few of which are required for summarizing actions.
                        </Typography>
                            <ul>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Expense Title (Optional)</em> - a quick descriptor of the expense.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Cost <strong>(Required)</strong></em> - the value of the expense.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Category <strong>(Required)</strong></em> - a general category for the expense. 
                                        Required for summaries about the types of expenses you generally incurred on your trip 
                                        (ie. Food, Transport, Hotels, etc.).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Currency <strong>(Required)</strong></em> - the original currency the expense was paid in.  Defaults to the trip's preferred currency.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Payment Method (Optional)</em> - the means of transaction (ie. cash, debit, credit, etc.).
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Description (Optional)</em> - An optional expansion upon the brief detail of the title.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Date & Time <strong>(Required)</strong></em> - The date and time of the expense. Defaults to the current date and time.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        <em>Location</em> - Where the expense occurred. Use Google Places search input to autocomplete the fields.
                                    </Typography>
                                    <ul>
                                        <li>
                                            <Typography variant='body1' className={classes.listText}>
                                                <em>Business (Optional)</em> - The business the transaction occurred with.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant='body1' className={classes.listText}>
                                                <em>City <strong>(Required)</strong></em> - The city the transaction occurred in.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant='body1' className={classes.listText}>
                                                <em>Country <strong>(Required)</strong></em> - The country the transaction occurred in.
                                            </Typography>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            
                            <Typography variant='body1' className={classes.pageText}>
                                The list of expenses can be <strong>sorted</strong> by <em>Date</em>, <em>Cost</em>, <em>Country</em>, and <em>Category</em>.
                            </Typography>

                            <Typography variant='h6' color='textSecondary' align='center'>
                                Expenses Summary
                            </Typography>
                            
                            <Typography variant='body1' className={classes.pageText}>
                                Each trip has a summary of the Expenses page.  
                                <br />The total spent is summarized in the trips preferred currency.  This currency can be changed at any 
                                time from the summary so that the metrics can be viewed however makes sense to you, whether it be CAD, USD, EUR, or <strong>30</strong> other currencies!
                                <br />The summary also contains other interesting metrics, such as: 
                            </Typography>
                            <ul>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        total number of expenses,
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        the average expense value,
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        the number of expenses per day,
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant='body1' className={classes.listText}>
                                        and the expenses subdivided by <em>Category</em>, <em>Date</em>, <em>City</em>, and <em>Country</em>.
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
                            </Grid>
                            <Typography variant='body1' className={classes.pageText}>
                                <em>Trip Tracker</em> was developed as a <strong>full stack MERN (MongoDB, Express, React, Node.js)</strong> app.  
                            </Typography>
                            <Typography variant='h6' align='center' className={classes.pageText}>Front-End</Typography>
                            <Typography variant='body1' className={classes.pageText}>
                                The React front-end primarily utilized components from <strong>Material UI</strong>, a component library implementing Google’s Material Design visual language.  
                                Where components need more custom styling, Material UI’s supported <strong>JSS</strong> styling solutions are used.  
                                The front-end makes liberal use of <strong>React Hooks</strong> and <strong>React’s Context API</strong> to allow most components written by myself to remain as decoupled, light-weight functional components.  
                                <em>Trip Tracker</em> is a <strong>single-page application</strong>, as it uses <strong>React Router</strong> as its routing solution, only fetching the index HTML page on initial loading.
                                <br />
                                <br />
                                The app makes use of <strong>Google Maps Javascript API Autocomplete </strong> library to search for the location of the user’s expense, and autofills the locations section of the form after a Place Details request.  
                                The app also uses the <strong>Exchangeratesapi.io API</strong> to fetch conversion rates between two currencies for the particular date specified for the expense, as well as for the Expenses Summary.
                            </Typography>
                            <Typography variant='h6' align='center' className={classes.pageText}>Back-End</Typography>
                            <Typography variant='body1' className={classes.pageText}>
                                The back-end is a <strong>Node.js</strong> server using MongoDB for its NoSQL database and <strong>Express</strong> for routing.  
                                The <strong>Mongoose</strong> library is used as the interface to <strong>MongoDB</strong>, as well as for schema construction and validation.  
                                The production build of the app uses <strong>MongoDB Atlas</strong> as its hosted database.  
                                As Trip Tracker is a single-page application, the Express routing is used primarily  for API endpoints for the front-end.
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

export default TripTrackerPage;