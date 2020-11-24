import React, {Component} from 'react';

class Demo4 extends Component {
    shouldComponentUpdate(nextProps) {
        const {name} = this.props;
        console.log(name, 'name');
        console.log(nextProps, 'nextProps');
        return false;
    }

    render() {
        const {name} = this.props;

        return <div id="div">{name}</div>;
    }
}

export default Demo4;
