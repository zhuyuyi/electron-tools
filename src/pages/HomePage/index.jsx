import React, { useState, useEffect, useCallback, useRef } from 'react';
import LayoutHeader from '@/components/LayoutHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { homePageActions } from './models/homePage';
import { Button } from 'antd';

import Demo1 from './components/demo1';
import Demo2 from './components/demo2';
import Demo3 from './components/demo3';
import Demo4 from './components/demo4';
import Demo5 from './components/demo5';
import Demo6 from './components/demo6';
import Demo7 from './components/demo7';
import Demo8 from './components/demo8';
import Demo9 from './components/demo9';
// let a

debugger

function HomePage() {

    // if (!a) {
    //     a = useState('zyy')
    // }

    /* -------------------- demo1下 ----------------- */
    const [demo1Name, setDemo1Name] = useState('xyb'); // demo1专用父亲
    /* -------------------- demo1上 ----------------- */

    /* -------------------- demo3下 ----------------- */
    const [count, setCount] = useState({
        num: 0
    });
    // componentDidMount
    useEffect(() => {
        setInterval(() => {
            setCount(c => {
                return {
                    num: c.num + 1
                }
            })
            // console.log(count, '我永远是初始化定义时的 0')
        }, 1000);
    }, [])
    /* -------------------- demo3上 ----------------- */

    /* -------------------- demo5下 ----------------- */
    // const [id, setId] = useState('');
    // useEffect(() => {
    //     setTimeout(() => {
    //         setId('123456789')
    //     }, 1000)
    // }, [])
    /* -------------------- demo5上 ----------------- */

    /* -------------------- demo8上 ----------------- */

    /* -------------------- demo8上 ----------------- */
    return (
        <div>
            <LayoutHeader title="主页" subTitle="这是主页">
                {/* <Button onClick={() => { setDemo1Name('I am father of demo1') }}>设置demo1 name</Button>
                <Demo1
                    demo1Name={demo1Name}
                /> */}
                {/* <Demo2 /> */}
                {/* <Demo3
                    count={count}
                /> */}
                {/* <Demo4
                    count={count}
                /> */}
                {/* <Demo5
                    id={id}
                /> */}
                {/* <Demo6 /> */}
                {/* <Demo7 /> */}
                
                {/* <Demo8 />
                <Demo9 /> */}

                {/* {demo1Name} */}
                {/* {a[0]} */}
                {/* <div onClick={() => { a[1]('zyyyyyy') }}>dsadsadasdad</div> */}
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
