import {combineReducers} from 'redux';
import homePageReducer from '@/pages/HomePage/models/homePage';

const readucer = combineReducers({
    homePageReducer,
});

export default readucer;
