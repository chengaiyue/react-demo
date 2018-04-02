import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {List} from 'antd';

class Sider extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let data1 = ['技能', '音乐', '游戏', '我和她'];
        let data2 = [
            {key: '姓名', value: 'zcc'},
            {key: '出生日期', value: 'zcc'},
            {key: '星座', value: 'zcc'},
            {key: '职业', value: 'zcc'},
            {key: '爱好', value: 'zcc'}
        ];
        return (
            <div className='blog-sider'>
                <div>
                    <span>博客分类</span>
                    <List
                        dataSource={data1}
                        bordered={false}
                        renderItem={item => (
                            <List.Item>{item}</List.Item>
                        )}
                    />
                </div>
                <div>
                    <span>关于博主</span>
                    <div>
                        <image />
                        <List
                            dataSource={data2}
                            bordered={false}
                            renderItem={item => (
                                <List.Item>{item.key} : {item.value}</List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Sider;