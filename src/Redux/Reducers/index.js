import changeState from './counterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
    changeState
})

export default rootReducer;