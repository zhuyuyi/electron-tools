import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LayoutHeader from '@/components/LayoutHeader';
import {Button, Card} from 'antd';

class HomePage extends Component {
    state = {};

    componentDidMount() {}

    render() {
        // let b = 1;
        return (
            <div>
                <LayoutHeader title="主页" subTitle="这是主页">
                    <Card>
                        <Button type="primary">sssss</Button>
                    </Card>
                </LayoutHeader>
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