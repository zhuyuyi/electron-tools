import React, {useState} from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Card} from 'antd';
import {homePageActions} from './models/homePage';
import styles from './index.scss';
import Demo2 from './components/demo2';

function HomePage(props) {
    console.log(props);

    const [person, setPerson] = useState({
        name: 'zhuyuyi',
        age: 25,
        like: {
            football: 'football',
        },
    });

    // useEffect(() => {
    //     getApi();
    // }, []);

    // const getApi = () => {
    //     const {ceshiApi} = props;
    //     ceshiApi();
    // };

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
                    <div className={styles.alertWarning}>
                        <div className={styles.zyyZzz}>2222</div>
                        <div className={styles.zyyZzz}>3333</div>
                        <div className={styles.zyyZzz}>4</div>
                        <div className={styles.zyyZzz}>5</div>
                    </div>
                    <Button type="primary" onClick={setPersonLike}>
                        {person.like.football}
                    </Button>

                    <div className={styles.alertInfo}>sdasdasdasdas</div>
                    <div className={styles.zyy3}>sadddddddd</div>

                    <Demo2 />
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
