import React, { useEffect } from 'react';
import { Card } from 'antd';


const Demo5 = (props) => {
    debugger
    const {
        id
    } = props;

    useEffect(() => {
        if (id) {
            new Promise((resolve) => {
                console.log(id, '我是demo5中的id值')
                resolve(id)
            })
        }
    }, [id])

    return (
        <Card title="demo5">
            我是demo5 {id}
        </Card>
    )
}

export default Demo5
