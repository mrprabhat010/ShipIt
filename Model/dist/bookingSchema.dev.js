"use strict";

var mongoose = require('mongoose');

var _require = require('nanoid'),
    customAlphabet = _require.customAlphabet; // need code reusability and code optimization


var alphabet = '123456789ABCDEFGH'; //this can be done in .env file to change at later point of time

var nanoid = customAlphabet(alphabet, 6); //-----

var bookings = mongoose.Schema({
  bookingId: {
    type: String,
    unique: true,
    "default": function _default() {
      return nanoid();
    } //need to be improved --> improved

  },
  service: {
    type: String
  },
  senderName: {
    type: String,
    required: [true]
  },
  recieverName: {
    type: String,
    required: [true, 'Required field']
  },
  senderPhoneNumber: {
    type: String,
    required: [true, 'Required field']
  },
  recieverPhoneNumber: {
    type: String,
    required: [true, 'Required field']
  },
  time: {
    type: String,
    required: [true, 'Required field']
  },
  senderCountry: {
    type: String,
    required: [true, 'Required field']
  },
  senderCity: {
    type: String,
    required: [true, 'Required field']
  },
  senderAddress: {
    type: String,
    required: [true, 'Required field']
  },
  senderZipCode: {
    type: String,
    required: [true, 'Required field']
  },
  recieverCountry: {
    type: String,
    required: [true, 'Required field']
  },
  recieverCity: {
    type: String,
    required: [true, 'Required field']
  },
  recieverAddress: {
    type: String,
    required: [true, 'Required field']
  },
  recieverZipCode: {
    type: String,
    required: [true, 'Required field']
  },
  Status: {
    type: String,
    "default": "Booked"
  }
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});
var BookingModel = mongoose.model('bookings', bookings);
module.exports = BookingModel;