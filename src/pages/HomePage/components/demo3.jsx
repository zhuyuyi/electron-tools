import { Card, Button } from 'antd';
import React, { } from 'react';

const Demo3 = (props) => {
    
    const { 
        count 
    } = props;
 
    const handleClick = () => {
        // console.log(count,'count')
        setTimeout(() => {
            console.log('props :>> ', props);
            alert(count.num);
        }, 3000);
    };

    return (
        <Card title="demo3">
            <p>{props.count.num}</p>
            <Button onClick={handleClick}>点我弹我</Button>
        </Card>
    );
}

export default Demo3;
