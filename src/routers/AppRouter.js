import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

import HomePage from "../components/HomePage";
import WorkoutLoggerPage from "../components/WorkoutLoggerPage";
import TripTrackerPage from "../components/TripTrackerPage";
import BingoPartyPage from "../components/BingoPartyPage";
import RoverPage from "../components/RoverPage";
import Footer from "../components/Footer";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [pathname]);

    return null;
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route path='/projects/WorkoutLogger' component={WorkoutLoggerPage} exact />
                <Route path='/projects/TripTracker' component={TripTrackerPage} exact />
                <Route path='/projects/BingoParty' component={BingoPartyPage} exact />
                <Route path='/projects/RoverFollower' component={RoverPage} exact />
                <Route component={HomePage} exact />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
