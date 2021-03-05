import React, { useState, useMemo } from 'react'
import { Button, Card } from 'antd';


export default () => {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('朱育仪');
    const add = useMemo(() => {
        console.log('我只有count变了，我才执行');
        let sum = 0;
        for (let i = 0; i < count * 10; i++) {
            sum += i;
        }
        return sum;
    }, [count])

    return (
        <Card>
            <h4>{count}-{add}</h4>
            {val}
            <div>
                <Button onClick={() => setCount(count + 1)}>+c1</Button>
                <input value={val} onChange={e => setValue(e.target.value)} />
            </div>
        </Card>
    );
}