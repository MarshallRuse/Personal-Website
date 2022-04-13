import React from "react";
import ProjectPageTemplate from "./ProjectPageTemplate";
import { IconRow, IconBox, SubSubsectionTitle } from "./styles/styledComponents";
import GlowingIcon from "./elements/GlowingIcon";
import { ReactComponent as ReactLogo } from "../assets/logos/colorless/react.svg";
import { ReactComponent as MaterialUILogo } from "../assets/logos/colorless/material-ui.svg";
import { ReactComponent as ExpressLogo } from "../assets/logos/colorless/express.svg";
import { ReactComponent as MongoDBLogo } from "../assets/logos/colorless/mongodb.svg";
import { ReactComponent as NodeJSLogo } from "../assets/logos/colorless/nodejs.svg";

const carouselImages = [
    {
        imageSrc: "TripTracker/TripTrackerTripPageLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerTripPage",
        description: "The trips dashboard page",
    },
    {
        imageSrc: "TripTracker/TripTrackerAddTripLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerAddTrip",
        description:
            "Add a new trip. Give it a title, a preferred currency for summaries, and choose categories for your expenses (can be edited at any time)",
    },
    {
        imageSrc: "TripTracker/TripTrackerExpensesPageLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerExpensesPage",
        description: "The expenses page for each trip",
    },
    {
        imageSrc: "TripTracker/TripTrackerAddExpenseLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerAddExpense",
        description: "The data to track for each expense",
    },
    {
        imageSrc: "TripTracker/TripTrackerDateSelectionLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerDateSelection",
        description: "Date selection done via a Material UI widget",
    },
    {
        imageSrc: "TripTracker/TripTrackerLocationAutocompleteLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerLocationAutocomplete",
        description: "Fill in location data with a Google Places business or city search",
    },
    {
        imageSrc: "TripTracker/TripTrackerSortLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerSort",
        description: "Sort your expenses (and trips) on a variety of metrics",
    },
    {
        imageSrc: "TripTracker/TripTrackerTripSummaryLandscape",
        smallScreenAltSrc: "TripTracker/TripTrackerTripSummary",
        description:
            "Receive a summary of your trip's expenses, broken down by multiple metrics, in your preferred currency",
    },
];

const BackgroundInfo = () => (
    <p>
        <em>Trip Tracker</em> arose out of a desire to organize and summarize all of our expense information from a
        recent trip abroad. While there are countless expense-tracking apps out there, I chose the much less efficient -
        but ultimately more rewarding - route of creating my own.
    </p>
);

const FeaturesInfo = () => (
    <>
        <p>
            <em>Trip Tracker</em> acts as a summarizer for each of your trips expenses. For each trip, a preferred (eg.
            home) currency can be set, with which all of the expenses entered therein will converted to.
        </p>
        <p>
            For each expense, a user may enter a number of metrics, a few of which are required for summarizing actions.
        </p>
        <ul>
            <li>
                <em>Expense Title (Optional)</em> - a quick descriptor of the expense.
            </li>
            <li>
                <em>
                    Cost <strong>(Required) </strong>
                </em>
                - the value of the expense.
            </li>
            <li>
                <em>
                    Category <strong>(Required)</strong>
                </em>{" "}
                - a general category for the expense. Required for summaries about the types of expenses you generally
                incurred on your trip (ie. Food, Transport, Hotels, etc.).
            </li>
            <li>
                <em>
                    Currency <strong>(Required)</strong>
                </em>{" "}
                - the original currency the expense was paid in. Defaults to the trip's preferred currency.
            </li>
            <li>
                <em>Payment Method (Optional)</em> - the means of transaction (ie. cash, debit, credit, etc.).
            </li>
            <li>
                <em>Description (Optional)</em> - An optional expansion upon the brief detail of the title.
            </li>
            <li>
                <em>
                    Date & Time <strong>(Required)</strong>
                </em>{" "}
                - The date and time of the expense. Defaults to the current date and time.
            </li>
            <li>
                <em>Location</em> - Where the expense occurred. Use Google Places search input to autocomplete the
                fields.
                <ul>
                    <li>
                        <em>Business (Optional)</em> - The business the transaction occurred with.
                    </li>
                    <li>
                        <em>
                            City <strong>(Required)</strong>
                        </em>{" "}
                        - The city the transaction occurred in.
                    </li>
                    <li>
                        <em>
                            Country <strong>(Required)</strong>
                        </em>{" "}
                        - The country the transaction occurred in.
                    </li>
                </ul>
            </li>
        </ul>

        <p>
            The list of expenses can be <strong>sorted</strong> by <em>Date</em>, <em>Cost</em>, <em>Country</em>, and{" "}
            <em>Category</em>.
        </p>

        <p>Expenses Summary</p>

        <p>
            Each trip has a summary of the Expenses page.
            <br />
            The total spent is summarized in the trips preferred currency. This currency can be changed at any time from
            the summary so that the metrics can be viewed however makes sense to you, whether it be CAD, USD, EUR, or{" "}
            <strong>30</strong> other currencies!
            <br />
            The summary also contains other interesting metrics, such as:
        </p>
        <ul>
            <li>total number of expenses,</li>
            <li>the average expense value,</li>
            <li>the number of expenses per day,</li>
            <li>
                and the expenses subdivided by <em>Category</em>, <em>Date</em>, <em>City</em>, and <em>Country</em>.
            </li>
        </ul>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='React' glowColor={"var(--color-react)"}>
                    <ReactLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Material UI' glowColor={"var(--color-materialui)"}>
                    <MaterialUILogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Express' glowColor={"var(--color-express)"} strokeWidth={4}>
                    <ExpressLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='MongoDB' glowColor={"var(--color-mongodb)"} strokeWidth={4}>
                    <MongoDBLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Node JS' glowColor={"var(--color-nodejs)"} strokeWidth={4}>
                    <NodeJSLogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            <em>Trip Tracker</em> was developed as a <strong>full stack MERN (MongoDB, Express, React, Node.js)</strong>{" "}
            app.
        </p>
        <SubSubsectionTitle>Front-End</SubSubsectionTitle>
        <p>
            The React front-end primarily utilized components from <strong>Material UI</strong>, a component library
            implementing Google’s Material Design visual language. Where components need more custom styling, Material
            UI’s supported <strong>JSS</strong> styling solutions are used. The front-end makes liberal use of{" "}
            <strong>React Hooks</strong> and <strong>React’s Context API</strong> to allow most components written by
            myself to remain as decoupled, light-weight functional components.
            <em>Trip Tracker</em> is a <strong>single-page application</strong>, as it uses{" "}
            <strong>React Router</strong> as its routing solution, only fetching the index HTML page on initial loading.
        </p>
        <p>
            The app makes use of <strong>Google Maps Javascript API Autocomplete </strong> library to search for the
            location of the user’s expense, and autofills the locations section of the form after a Place Details
            request. The app also uses the <strong>Exchangeratesapi.io API</strong> to fetch conversion rates between
            two currencies for the particular date specified for the expense, as well as for the Expenses Summary.
        </p>
        <SubSubsectionTitle>Back-End</SubSubsectionTitle>
        <p>
            The back-end is a <strong>Node.js</strong> server using MongoDB for its NoSQL database and{" "}
            <strong>Express</strong> for routing. The <strong>Mongoose</strong> library is used as the interface to{" "}
            <strong>MongoDB</strong>, as well as for schema construction and validation. The production build of the app
            uses <strong>MongoDB Atlas</strong> as its hosted database. As Trip Tracker is a single-page application,
            the Express routing is used primarily for API endpoints for the front-end.
        </p>
    </>
);

const TripTrackerPage = () => {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='TripTracker/mapsBackground'
            pageTitle='Trip Tracker App'
            projectSourceLink='https://github.com/MarshallRuse/TripExpensesTracker'
            projectDemoLink='https://marshall-trip-tracker-app.herokuapp.com/'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='TripTracker/travelThingsBackground'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='TripTracker/globeBackground'
            developmentInfo={<DevelopmentInfo />}
        />
    );
};

export default TripTrackerPage;
