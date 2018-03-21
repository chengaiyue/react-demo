import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

@withRouter
class Home extends Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.history.push('./about');
    }

    render () {
        return (
            <div>
                <div>home</div>
                <button onClick={this.onClick}>about</button>
            </div>
        )
    }
}

export default Home;