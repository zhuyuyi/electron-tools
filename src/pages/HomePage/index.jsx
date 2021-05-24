import React, { useState, useEffect, useCallback, useRef } from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { homePageActions } from './models/homePage';
import { Button } from 'antd';
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';

import Demo1 from './components/demo1';
import Demo2 from './components/demo2';
import Demo3 from './components/demo3';
import Demo4 from './components/demo4';
import Demo5 from './components/demo5';
import Demo6 from './components/demo6';
import Demo7 from './components/demo7';
import Demo8 from './components/demo8';
import Demo9 from './components/demo9';
import Demo10 from './components/demo10';
import { useMemo } from 'react';


function HomePage(props) {

    console.log(props)

    const [demo1Name, setDemo1Name] = useState('xyb'); // demo1专用父亲
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
   
    const [count, setCount] = useState({
        num: 0
    });

    const clickBtn = () => {
        new Promise((resolve) => {
            resolve()
        }).then(() => {
            batchedUpdates(() => {
                setDemo1Name('I am father of demo1');
                setA(c => c + 1);
                setB(c => c + 1);
            })

        })
    }

    return (
        <div>
            <LayoutHeader title="主页" subTitle="这是主页">
                <Button onClick={clickBtn}>设置demo1 name</Button>

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
