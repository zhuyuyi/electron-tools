import React, {useContext} from 'react';
import {MyContext} from './countsHook';
import {Button} from 'antd';

function TextDemoTwo() {
    const {dispatch} = useContext(MyContext);

    const getName = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('zhuyuyi');
            }, 1000);
        });
    };

    const setName = async () => {
        let name = await getName();
        dispatch({
            type: 'setname',
            name,
        });
    };

    return (
        <div>
            <Button onClick={setName}>222222222222222</Button>
        </div>
    );
}

export default TextDemoTwo;
