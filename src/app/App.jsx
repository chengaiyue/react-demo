import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

import {default as configureStore} from '../redux/reducer';
import {Header, Sider} from '../lib';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let store = configureStore();
        return (
            <Provider store={store}>
                <div className='personal-blog'>
                    <Header />
                    <div className='blog-content'>
                        <Sider />
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;
