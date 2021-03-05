import React, { Component } from 'react';
import { Card, Button } from 'antd';

class Demo4 extends Component {

    handleClick = () => {
        // const {
        //     count
        // } = this.props;

        setTimeout(() => {
            alert(this.props.count);
        }, 3000);
    };

    render() {
        const {
            count
        } = this.props;

        return (
            <Card title="demo4">
                <p>{count}</p>
                <Button onClick={this.handleClick}>点我弹我4</Button>
            </Card>
        );
    }
}

export default Demo4;
