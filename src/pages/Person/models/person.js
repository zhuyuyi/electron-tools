const initState = {
    inputValue: '',
    list: [],
};

const person = (state = initState, action) => {
    let newState = Object.assign(true, {}, state);
    switch (action.type) {
        case 'Search_AFTLOAN_PKG': {
            newState = '1';
            return newState;
        }
        default:
            return state;
    }
};

export default person;
