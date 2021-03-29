import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Card, Button } from 'antd';


function Demo1(props) {

    const {
        demo1Name
    } = props;
    
    useEffect(() => {
        console.log(demo1Name, 'demo1Name')
    }, [demo1Name])

    const [nameZyy, setNameZyy] = useState('zyy');
    const [nameXyb, setNameXyb] = useState('xyb');

    const clickZyy = () => {
        setNameZyy('朱育仪')
    }

    const clickXyb = () => {
        setNameXyb('许艺宝')
    }

    // 相当于 componentDidMount + 每次都会触发 componentDidUpdate
    useEffect(() => {
        console.log('我一直在触发useEffect1')
    })

    // 只有组件初始化的时候触发 componentDidMount
    useEffect(() => {
        console.log('我初始化的时候触发了useEffect2')
    }, [])

    useLayoutEffect(()=>{
    },[])

    // 只要nameZyy变化了,以及初始化时就触发 类似于 vue中的 watch
    useEffect(() => {
        console.log('因为nameZyy变化了，我触发了useEffect3')
    }, [nameZyy])

    // 只要nameXyb变化了,以及初始化时就触发
    useEffect(() => {
        console.log('因为nameXyb变化了，我触发了useEffect4')
    }, [nameXyb])

    // 组件卸载时触发 componentWillUnmount
    useEffect(()=>{
        return () => {
            console.log(11111)
        }
    },[])

    return (
        <Card title="demo1">
            <div>{nameZyy}</div>
            {/* <div>{nameXyb}</div> */}
            <Button onClick={clickZyy}>设置名称nameZyy</Button>
            <Button onClick={clickXyb}>设置名称nameXyb</Button>
        </Card>
    )
}

export default Demo1;
