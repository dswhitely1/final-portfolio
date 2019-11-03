import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {GlobalStyle} from '../styles/global';
import {H6} from '../styles/typography';
import Navigation from './navigation/Navigation';
import Header from './header/Header';

function App() {
    return (
        <>
            <GlobalStyle />
            <Navigation />
            <Switch>
                <Route exact path='/' component={Header} />
            </Switch>
        </>
    )
}

export default App;