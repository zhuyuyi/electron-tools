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
let a


function HomePage() {
    // if (!a) {
    //     a = useState('zyy')
    // }

    /* -------------------- demo1下 ----------------- */
    const [demo1Name, setDemo1Name] = useState('xyb'); // demo1专用父亲
    const [a, setA] = useState(1)
    const [b, setB] = useState(1)
    /* -------------------- demo1上 ----------------- */
    // debugger
    /* -------------------- demo3下 ----------------- */
    const [count, setCount] = useState({
        num: 0
    });
    // componentDidMount
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(c => {
    //             return {
    //                 num: c.num + 1
    //             }
    //         })
    //         // console.log(count, '我永远是初始化定义时的 0')
    //     }, 1000);
    // }, [])
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

    // const [value, setValue] = useState('');
    // const [count, setCount] = useState(0);

    // const onClick = useMemo(() => {
    //     return <Demo10
    //         count={count}
    //     />
    // }, [count]);

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

    console.log(11111111)

    return (
        <div>
            <LayoutHeader title="主页" subTitle="这是主页">
                <Button onClick={clickBtn}>设置demo1 name</Button>
                {a}{b}
                {/* <Demo1
                    demo1Name={demo1Name}
                /> */}
                {/* <Demo2 /> */}
                {/* <Demo3
                    count={count}
                /> */}
                <Demo4 />
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
                {/* <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
                {onClick} */}
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
