import React, { useState, useMemo, useCallback } from 'react';
import { Card, Button } from 'antd';

const Index = (props) => {
    
    const {
        onClick,
        count,
    } = props;

    const isEvenNumber = useMemo(() => {
        console.log(111111111)
        return count % 2 === 0;
    }, [count]);

    // const onClick = useCallback(() => {
    //     console.log(2222222222)
    //     setCount(count + 1);
    // }, [count]);
    console.log(2321331313)
    return (
        <div>
            <div>{count}</div>
            <button onClick={onClick}>点击</button>
        </div>
    );
};

export default Index