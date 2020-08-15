import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button} from 'antd';

class HomePage extends Component {
    render() {
        let a = 1;
        return (
                <div>
                <Button type="primary">sssss</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({}, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
