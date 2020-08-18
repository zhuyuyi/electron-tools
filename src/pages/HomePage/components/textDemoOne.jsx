import React, {useContext} from 'react';
import {MyContext} from './countsHook';

function TextDemoOne(props) {
    const {state} = useContext(MyContext);

    return (
        <div>
            {state.name}--------One
            {props.children}
        </div>
    );
}

export default TextDemoOne;
