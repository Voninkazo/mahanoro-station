import React from 'react';
import {Route, Switch } from 'react-router-dom';
import AccountContainer from './containers/account';

import Header from './containers/header';
import Account from './pages/account';
import Home from './pages/home';

function App() {
    return (
       <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
            </Switch>
        </>
    )
}

export default App
