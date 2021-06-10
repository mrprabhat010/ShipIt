import {
    FETCH_BOOKINGS,
    MAKE_BOOKINGS,
    DELETE_BOOKINGS,
    FETCH_SERVICES,
    FETCH_SERVICE,
    SET_QUERY,
    LOGIN,
    REGISTER
} from '../Constants/types';
import { authHeader } from './auth-header';
import axios from 'axios';
import { createAction } from 'redux-actions';
import {history} from '../ui/history';

const loginMe = createAction(LOGIN);
const getBookings = createAction(FETCH_BOOKINGS);
const booking = createAction(MAKE_BOOKINGS);
const delBooking = createAction(DELETE_BOOKINGS);
const getServices = createAction(FETCH_SERVICES);
const getService = createAction(FETCH_SERVICE);
const query = createAction(SET_QUERY);
const signup = createAction(REGISTER);


// const URL = 'http://localhost:4000';

// booking actions
export function fetchBookings(user) {
    return dispatch => {
        axios(`/bookings?user=${user}`, {
            method: 'GET',
            crossdomain: true,
            headers: authHeader()
        }).then(response =>dispatch(getBookings(response.data)))
        .catch(error =>dispatch(getBookings(error)))
    }
}
export function makeBookings(data) {
    return dispatch => {
        axios( {
            url:`/bookings`,
            method: 'POST',
            crossdomain: true,
            data,
            headers: authHeader()
        }).then(response =>dispatch(booking(response.status)))
        .catch(error =>dispatch(booking(error)))
    }
}
export function deleteBookings(id) {
    return dispatch => {
        axios(`/bookings/${id}`, {
            method: 'DELETE',
            crossdomain: true,
            headers: authHeader()
        }).then(response =>dispatch(delBooking(response.data)))
        .catch(error =>dispatch(delBooking(error)))
    }
}

export function makeQueries(data) {
    return dispatch => {
        axios({
            url:`/queries`, 
            method: 'POST',
            crossdomain: true,
            data
        }).then(response =>{
            console.log(response)
            dispatch(query(response.status))})
        .catch(error =>dispatch(query(error)))
    }
}

// getting service info action
export function fetchService(id) {
    return dispatch => {
        axios({
            url:`/services/${id}`,
            method: 'GET',
            crossdomain: true,
        }).then(response =>dispatch(getService(response.data)))
        .catch(error =>dispatch(getService(error)))
    }
}
export function fetchServices() {
    return dispatch => {
        axios({
            url:`/services`,
            method: 'GET',
            crossdomain: true,
        }).then(response =>dispatch(getServices(response.data.data)))
        .catch(error =>dispatch(getServices(error)))
    }
}

// user authentication actions
export function login(data){
    return dispatch => {
        axios({
            url: `/login`,
            method: 'POST',
            crossdomain: true,
            data:{ email:data.email, password:data.password},
        }).then(user => {
            localStorage.setItem('user',JSON.stringify(user));
            dispatch(loginMe(user))
            history.push('/home')
            console.log(user)
            
        }).catch(err => {dispatch(loginMe(err))})
    }
}
export function register(data){
    return dispatch => {
        axios({
            url:`/register`,
            method: 'POST',
            crossdomain: true,
            data:{username:data.username, password:data.password, mailId:data.email,phoneNumber:data.phoneNumber
            }
        }).then(user => {
            localStorage.setItem('user',JSON.stringify(user));
            console.log(user)
            dispatch(signup(user))
            history.push('/home')
        }).catch(err => {dispatch(signup(err))})
    }
}

export function Logout() {
    localStorage.removeItem('user');
    history.push('/sign_in')
  }


