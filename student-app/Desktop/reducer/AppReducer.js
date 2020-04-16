import {combineReducers} from 'redux';
import StudentReducer from './StudentReducer';
import FormReducer from './FormReducer'

export default combineReducers({
    studentStore: StudentReducer,
    studentForm: FormReducer
})