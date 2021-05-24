import { ceshiApi } from '@/apis/homePage';

const initialState = {
    name: 'zhangsan',
    age: 25,
};

export const setPerson = (params) => {
    return async (dispatch) => {
        ceshiApi(params).then(() => {
            dispatch({
                type: 'setname',
                payload: 'zyy',
                key: 'name',
            });
        })
    }
}

const homePage2Reducer = (state = initialState, { type, key, payload }) => {
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

export default homePage2Reducer;
