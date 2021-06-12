import {
    FETCH_BOOKINGS,
    MAKE_BOOKINGS,
    DELETE_BOOKINGS,
    SET_QUERY,
} from '../Constants/types';


export function data(state = {}, action) {
    switch (action.type) {
        case FETCH_BOOKINGS:
            return action.payload.data ;

        case MAKE_BOOKINGS:
            return {
                data: action.payload,
            };

        case DELETE_BOOKINGS:
            return state;

        case SET_QUERY:
            return { 
                message: 'quotation created' };

        default:
            return state;
    }
}