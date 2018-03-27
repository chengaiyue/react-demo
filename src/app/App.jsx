import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {default as configureStore} from '../redux/reducer';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import {Home, About} from '../lib';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let store = configureStore();
        return (
            <Provider store={store}>
                <Layout className='personal-blog'>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>
                            <Router basename='/'>
                                <div>
                                    <Switch>
                                        <Route exact path='/' component={Home}/>
                                        <Route exact path='/home' component={Home}/>
                                        <Route exact path='/about' component={About}/>
                                    </Switch>
                                </div>
                            </Router>
                        </Content>
                    </Layout>
                </Layout>
            </Provider>
        )
    }
}

export default App;
