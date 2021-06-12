import { combineReducers } from 'redux';
import { authentication } from './userAuth';
import { data } from './dataCalls';
import {services } from './services.reducers';


const rootReducer = combineReducers({ authentication, data, services });

export default rootReducer;