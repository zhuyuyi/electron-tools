import React, {useEffect} from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card} from 'antd';
import {homePageActions} from './models/homePage';

function HomePage(props) {
    console.log(props);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        const {ceshiApi} = props;
        ceshiApi();
    };

    return (
        <div>
            <LayoutHeader title="主页" subTitle="这是主页">
                <Card>
                    <div></div>
                    <Button type="primary">sssss</Button>
                </Card>
            </LayoutHeader>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(
            {
                ...homePageActions,
            },
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
