import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { myContext } from './../../HomePage2/otherFunctions';

class Demo4 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            a: 1,
            b: 1,
            c: 1
        }
    }

    handleClick = () => {
        new Promise((resolve) => {
            resolve()
        }).then(() => {
            this.setState({
                a: this.state.a + 1,
                b: this.state.b + 1,
                c: this.state.c + 1
            })
            // this.setState({
            //     b: this.state.b + 1
            // })
            // this.setState({
            //     c: this.state.c + 1
            // })
        })
    };

    render() {
        console.log(11111)
        const {
            a,
            b,
            c,
        } = this.state;
        return (
            <Card title="demo4">
                <myContext.Consumer>
                    {value => console.log(value, 'value')}
                </myContext.Consumer>
                <div>{a}{b}{c}</div>
                <Button onClick={this.handleClick}>点我弹我4</Button>
            </Card>
        );
    }
}

export default Demo4;
