import {combineReducers} from 'redux';
import homePageReducer from '@/pages/HomePage/models/homePage';
import homePageReducer2 from '@/pages/HomePage2/models';

const reducer = combineReducers({
    homePageReducer,
    homePageReducer2
});

export default reducer;
