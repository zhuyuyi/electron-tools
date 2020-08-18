import React, {useState, useReducer, createContext} from 'react';
import {Button} from 'antd';

export const MyContext = createContext();

const obj = {
    name: 'zhangsan',
    age: 25,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setname': {
            return {
                ...state,
                name: action.name,
            };
        }
        default:
            return state;
    }
};

const useCus = (val, num) => {
    let [count, SetCount] = useState(val);

    const add = () => {
        SetCount(count + num);
    };

    return {
        count,
        add,
    };
};

function SetCount(props) {
    const {count, add} = useCus(10, 2);
    const [state, dispatch] = useReducer(reducer, obj);

    return (
        <div>
            <h2>{count}</h2>
            <h2>
                {state.name}---{state.age}
            </h2>
            <Button onClick={add}>add</Button>
            <Button
                onClick={() => {
                    dispatch({
                        type: 'setname',
                        name: 'wdnmd',
                    });
                }}
            >
                dispatch
            </Button>

            <MyContext.Provider value={{state, dispatch}}>{props.children}</MyContext.Provider>
        </div>
    );
}

export default SetCount;
