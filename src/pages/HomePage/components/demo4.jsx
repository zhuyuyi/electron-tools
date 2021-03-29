import React, { Component } from 'react';
import { Card, Button } from 'antd';

class Demo4 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            a: 1,
            num: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            const {
                num
            } = this.state;
            this.setState({
                num: num + 1
            })
            console.log(this.state.num)
        }, 2000)
    }

    handleClick = () => {
        // const {
        //     count
        // } = this.props;

        console.log(this)
    };

    render() {
        console.log(this.props)
        // const {
        //     count
        // } = this.props;

        return (
            <Card title="demo4">
                {/* <p>{count}</p> */}
                <Button onClick={this.handleClick}>点我弹我4</Button>
            </Card>
        );
    }
}

export default Demo4;
