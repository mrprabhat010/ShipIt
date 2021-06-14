"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = data;

var _types = require("../Constants/types");

function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.FETCH_BOOKINGS:
      return action.payload;

    case _types.MAKE_BOOKINGS:
      return {
        data: action.payload
      };

    case _types.DELETE_BOOKINGS:
      return state;

    case _types.SET_QUERY:
      return {
        message: 'quotation created'
      };

    default:
      return state;
  }
}