import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {default as configureStore} from '../redux/reducer';
import {default as routerConfig} from '../router-config/RouterConfig';
import {Home, About} from '../lib';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let store = configureStore();
        return (
            <Provider store={store}>
                <div>
                    <div className='personal-blog'>
                        <h2>BLOG</h2>
                    </div>
                    <Router basename='/' component={Home}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/about' component={About}/>
                        </Switch>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default App;
