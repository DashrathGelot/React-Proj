import {combineReducers} from 'redux';
import StudentReducer from './StudentReducer';

export default combineReducers({
    studentStore:StudentReducer,
})