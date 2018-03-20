import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Link, browserHistory } from 'react-router';
import {default as configureStore} from '../redux/reducer';
import {default as routerConfig} from '../router-config/RouterConfig';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let store = configureStore();
        return (
            <Provider store={store}>
                <Router history={browserHistory} routes={routerConfig} />
            </Provider>
        )
    }
}

export default App;
