const initState = {
    inputValue: '',
    list: [],
};

const homePage = (state = initState, action) => {
    let newState = Object.assign(true, {}, state);
    switch (action.type) {
        case 'Search_AFTLOAN_PKG_INFO': {
            newState = '1';
            return newState;
        }
        default:
            return state;
    }
};

export default homePage;
