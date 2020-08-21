import React, {useEffect, useState} from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card} from 'antd';
import {homePageActions} from './models/homePage';

function HomePage(props) {
    console.log(props);

    const [person, setPerson] = useState({
        name: 'zhuyuyi',
        age: 25,
        like: {
            football: 'football',
        },
    });

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        const {ceshiApi} = props;
        ceshiApi();
    };

    const setPersonLike = () => {
        setPerson({
            like: {
                football: 'football',
            },
        });
    };

    return (
        <div>
            <LayoutHeader title="主页" subTitle="这是主页">
                <Card>
                    <div></div>
                    <Button type="primary" onClick={setPersonLike}>
                        {person.like.football}
                    </Button>
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
