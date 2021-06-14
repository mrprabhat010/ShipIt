"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authHeader = authHeader;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function authHeader() {
  // return authorization header with jwt token
  var user = JSON.parse(localStorage.getItem('user'));

  if (user && user.data) {
    var token = user.data.token;

    var decodedToken = _jsonwebtoken["default"].decode(token, {
      complete: true
    });

    var date = new Date();

    if (!(decodedToken.exp < date.getTime())) {
      return {
        'Authorization': "Bearer ".concat(token)
      };
    } else {
      (0, _index.Logout)();
    }
  }
}