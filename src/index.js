import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import {Provider} from 'react-redux';
import store from './store';

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <GlobalStyles />
            <App />
        </Router>
    </Provider>,document.getElementById('root')
    )