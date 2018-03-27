import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {default as configureStore} from '../redux/reducer';
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
                    <Router basename='/'>
                        <div>
                            <div>
                                <Link to='/about'>about</Link>
                                <Link to='/home'>home</Link>
                            </div>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/home' component={Home}/>
                                <Route exact path='/about' component={About}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default App;
