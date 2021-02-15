import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './containers/header';
import NextTripsContainer from './containers/nextTrips';
import Account from './pages/account';
import Home from './pages/home';
import BookSeats from './pages/bookSeats';

function App() {
    return (
       <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/:dest">
                    <NextTripsContainer />
                </Route>
                <Route path="/trip/:tripId">
                   <BookSeats />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
            </Switch>
        </>
    )
}

export default App
