import {
    FETCH_BOOKINGS,
    MAKE_BOOKINGS,
    DELETE_BOOKINGS,
    FETCH_SERVICES,
    FETCH_SERVICE,
    SET_QUERY,
} from '../Constants/types';


export function data(state = {}, action) {
    switch (action.type) {
        case FETCH_BOOKINGS:
            return action.payload.data ;

        case MAKE_BOOKINGS:
            return {
                data: action.payload.data,
            };

        case DELETE_BOOKINGS:
            return state;

        case FETCH_SERVICES:
            return { data: action.payload };

        case FETCH_SERVICE:
            return  action.payload;

        case SET_QUERY:
            return { 
                data: action.payload,
                message: 'quotation created' };

        default:
            return state;
    }
}