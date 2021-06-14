"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBookings = fetchBookings;
exports.makeBookings = makeBookings;
exports.deleteBookings = deleteBookings;
exports.makeQueries = makeQueries;
exports.fetchService = fetchService;
exports.fetchServices = fetchServices;
exports.login = login;
exports.register = register;
exports.Logout = Logout;

var _types = require("../Constants/types");

var _authHeader = require("./auth-header");

var _axios = _interopRequireDefault(require("axios"));

var _reduxActions = require("redux-actions");

var _history = require("../ui/history");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginMe = (0, _reduxActions.createAction)(_types.LOGIN);
var getBookings = (0, _reduxActions.createAction)(_types.FETCH_BOOKINGS);
var booking = (0, _reduxActions.createAction)(_types.MAKE_BOOKINGS);
var delBooking = (0, _reduxActions.createAction)(_types.DELETE_BOOKINGS);
var getServices = (0, _reduxActions.createAction)(_types.FETCH_SERVICES);
var getService = (0, _reduxActions.createAction)(_types.FETCH_SERVICE);
var query = (0, _reduxActions.createAction)(_types.SET_QUERY);
var signup = (0, _reduxActions.createAction)(_types.REGISTER); // const URL = 'http://localhost:4000';
// booking actions

function fetchBookings(user) {
  return function (dispatch) {
    (0, _axios["default"])("/bookings?user=".concat(user), {
      method: 'GET',
      crossdomain: true,
      headers: (0, _authHeader.authHeader)()
    }).then(function (response) {
      return dispatch(getBookings(response.data));
    })["catch"](function (error) {
      return dispatch(getBookings(error));
    });
  };
}

function makeBookings(data) {
  return function (dispatch) {
    (0, _axios["default"])({
      url: "/bookings",
      method: 'POST',
      crossdomain: true,
      data: data,
      headers: (0, _authHeader.authHeader)()
    }).then(function (response) {
      return dispatch(booking(response.status));
    })["catch"](function (error) {
      return dispatch(booking(error));
    });
  };
}

function deleteBookings(id) {
  return function (dispatch) {
    (0, _axios["default"])("/bookings/".concat(id), {
      method: 'DELETE',
      crossdomain: true,
      headers: (0, _authHeader.authHeader)()
    }).then(function (response) {
      return dispatch(delBooking(response.data));
    })["catch"](function (error) {
      return dispatch(delBooking(error));
    });
  };
}

function makeQueries(data) {
  return function (dispatch) {
    (0, _axios["default"])({
      url: "/queries",
      method: 'POST',
      crossdomain: true,
      data: data
    }).then(function (response) {
      console.log(response);
      dispatch(query(response.status));
    })["catch"](function (error) {
      return dispatch(query(error));
    });
  };
} // getting service info action


function fetchService(id) {
  return function (dispatch) {
    (0, _axios["default"])({
      url: "/services/".concat(id),
      method: 'GET',
      crossdomain: true
    }).then(function (response) {
      return dispatch(getService(response.data));
    })["catch"](function (error) {
      return dispatch(getService(error));
    });
  };
}

function fetchServices() {
  return function (dispatch) {
    (0, _axios["default"])({
      url: "/services",
      method: 'GET',
      crossdomain: true
    }).then(function (response) {
      return dispatch(getServices(response.data.data));
    })["catch"](function (error) {
      return dispatch(getServices(error));
    });
  };
} // user authentication actions


function login(data) {
  return function (dispatch) {
    (0, _axios["default"])({
      url: "/login",
      method: 'POST',
      crossdomain: true,
      data: {
        email: data.email,
        password: data.password
      }
    }).then(function (user) {
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(loginMe(user));

      _history.history.push('/home');

      console.log(user);
    })["catch"](function (err) {
      dispatch(loginMe(err));
    });
  };
}

function register(data) {
  return function (dispatch) {
    (0, _axios["default"])({
      url: "/register",
      method: 'POST',
      crossdomain: true,
      data: {
        username: data.username,
        password: data.password,
        mailId: data.email,
        phoneNumber: data.phoneNumber
      }
    }).then(function (user) {
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
      dispatch(signup(user));

      _history.history.push('/home');
    })["catch"](function (err) {
      dispatch(signup(err));
    });
  };
}

function Logout() {
  localStorage.removeItem('user');

  _history.history.push('/sign_in');
}