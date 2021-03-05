import React, { useEffect } from 'react';
import { Card } from 'antd';


const Demo5 = (props) => {

    const {
        id
    } = props;

    useEffect(() => {
        if (id) {
            setTimeout(() => {
                console.log(id, '我是demo5中的id值')
            }, 100)
        }
    }, [id])

    return (
        <Card title="demo5">
            我是demo5 {id}
        </Card>
    )
}

export default Demo5
