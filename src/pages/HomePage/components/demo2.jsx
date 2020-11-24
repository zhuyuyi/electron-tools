import React, {Component} from 'react';
import {Button} from 'antd';
import Demo3 from './demo3';
import Demo4 from './demo4';

class Demo2 extends Component {
    state = {
        name: 1,
    };

    setValue = () => {
        this.setState({
            name: this.state.name + 1,
        });
    };

    render() {
        return (
            <div id="div">
                <Button onClick={this.setValue}>朱育仪</Button>
                <Demo3 name={this.state.name} />
                <Demo4 name={this.state.name} />
            </div>
        );
    }
}

export default Demo2;
