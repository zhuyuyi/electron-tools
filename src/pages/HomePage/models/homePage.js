import {ceshiApi} from '@/apis/homePage';

const initialState = {
    name: 'zhangsan',
    age: 25,
};

export const homePageActions = {
    ceshiApi: params => {
        return async dispatch => {
            const response = await ceshiApi(params);
            dispatch({
                type: 'setname',
                payload: response.data.arr[0].name,
                key: 'name',
            });
        };
    },
};

const homePageReducer = (state = initialState, {type, key, payload}) => {
    switch (type) {
        case 'setname': {
            return {
                ...state,
                [key]: payload,
            };
        }
        default:
            return state;
    }
};

export default homePageReducer;
