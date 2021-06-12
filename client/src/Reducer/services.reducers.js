import {
    FETCH_SERVICES,
    FETCH_SERVICE
} from '../Constants/types';


export function services(state = {}, action) {
    switch (action.type) {

        case FETCH_SERVICES:
            return { data: action.payload };

        case FETCH_SERVICE:
            return  action.payload;

        default:
            return state;
    }
}