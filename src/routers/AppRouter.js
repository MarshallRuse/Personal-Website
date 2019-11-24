import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Footer from '../components/Footer';

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact />
                <Route component={HomePage} exact />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;