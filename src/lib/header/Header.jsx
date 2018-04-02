import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Input, Icon} from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='blog-header'>
                <div className='logo'>
                    cheng
                </div>
                <div className='nav'>
                    <span>博客</span>
                    <span>关于我</span>
                    <span>和我联系</span>
                </div>
                <div className='search'>
                    <Input defaultValue='请输入关键字'/>
                    <Icon type="search" />
                </div>
            </div>
        )
    }
}

export default Header;