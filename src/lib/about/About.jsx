import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class About extends Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.history.push('./home');
    }

    render () {
        return (
            <div>
                <div>about</div>
                <button onClick={this.onClick}>button</button>
            </div>
        )
    }
}

export default About;