import React, {Component} from 'react';

class Demo3 extends Component {
    render() {
        const {name} = this.props;

        return <div id="div">{name}</div>;
    }
}

export default Demo3;
