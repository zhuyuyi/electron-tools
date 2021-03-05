import React, { useState } from 'react'
import { Button,Card } from 'antd';

export default () => {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('朱育仪');
    function add() {
        console.log('我又执行了');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }
    
    return (
        <Card title="demo6">
            <h4>{count}---{add()}</h4>
            {val}
            <div>
                <Button onClick={() => setCount(count + 1)}>+1</Button>
                <input value={val} onChange={e => setValue(e.target.value)} />
            </div>
        </Card>
    );
}
