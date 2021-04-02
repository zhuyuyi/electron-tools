import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
function Demo2() {
    const [num, setNum] = useState(0);
    console.log(111111)
    // componentDidMount
    useEffect(() => {
        setInterval(() => {
            setNum(c => c + 1) // num一直是0，我拿的一直是第一帧即初始化时候的值
            // console.log(num)
        }, 3000);
    }, [])

    // useEffect(() => {
    //     console.log(num, '我变成了1，之后一直是1，切不会触发渲染了')
    // }, [num])

    return (
        <Card title="demo2">
            <p>{num}</p>
        </Card>
    )
}
export default Demo2;
