import React, { useState, } from 'react'
import { Button, Card } from 'antd';
import { useOnline } from './customHooks';

export default () => {

    const online = useOnline();
    console.log(online)

    return (
        <Card title="demo8">
            <div>
                {online ? '我在线' : '我离线'}
            </div>
        </Card>
    );
}