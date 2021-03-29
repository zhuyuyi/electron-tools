import React, { useState, useEffect } from 'react'
import { Button, Card } from 'antd';
import { useOnline } from './customHooks';

export default () => {
    const [_online, set_online] = useState('');
    useEffect(() => {
        // const online = useOnline();
        // set_online(online);
        // console.log(online)
    }, [])


    return (
        <Card title="demo8">
            <div>
                {_online ? '我在线' : '我离线'}
            </div>
        </Card>
    );
}