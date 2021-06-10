const express = require('express');
const routing = express.Router();
const userController = require('../Controller/users');
const serviceController = require('../Controller/services');
const bookingController = require('../Controller/bookings');
const queryController = require('../Controller/query');

//user routing
routing.post('/register', userController.register);
routing.post('/login', userController.login);
// routing.put('/users/:id', userController.updateUser);// for admin
// routing.delete('/users/:id', userController.deleteUser);// for admin

// service routing
routing.get('/services', serviceController.getServices);
routing.get('/services/:id', serviceController.getService);
routing.post('/services', serviceController.newService);
routing.put('/services/:id', serviceController.updateService);
routing.delete('/services/:id', serviceController.deleteService);

//booking routing
routing.get('/bookings', bookingController.getBookings);
routing.post('/bookings', bookingController.newBooking);
// routing.put('/bookings/:id', bookingController.updateBooking);//will implement later
routing.delete('/bookings/:id', bookingController.deleteBooking);

// query routing
// routing.get('/queries', queryController.getQuery);// for admin
routing.post('/queries', queryController.newQuery);
// routing.put('/queries/:id', queryController.updateQuery);// for admin
// routing.delete('/queries/:id', queryController.deleteQuery);// admin

// routing.all('*', serviceController.invalid);
module.exports = routing;