import { combineReducers } from 'redux';
import { authentication } from './userAuth';
import { data } from './dataCalls';


const rootReducer = combineReducers({ authentication, data });

export default rootReducer;