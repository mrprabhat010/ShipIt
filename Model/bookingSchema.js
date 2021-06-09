const mongoose = require('mongoose');
const { customAlphabet } = require('nanoid');

// need code reusability and code optimization
const alphabet = '123456789ABCDEFGH'; //this can be done in .env file to change at later point of time
const nanoid = customAlphabet(alphabet, 6);
//-----

const bookings = mongoose.Schema({
    bookingId: {
        type: String,
        unique: true,
        default:()=>nanoid(), //need to be improved --> improved
        
    },
    service: {
        type: String,
    },
    senderName: {
        type: String,
        required: [true],
    },
    recieverName: {
        type: String,
        required: [true, 'Required field'],
    },
    senderPhoneNumber: {
        type: String,
        required: [true, 'Required field'],
    },
    recieverPhoneNumber: {
        type: String,
        required: [true, 'Required field'],
    },
    time: {
        type: Date,
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
    senderZipCode:{
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
    recieverZipCode:{
        type: String,
        required: [true, 'Required field']
    },
    Status:{
        type: String,
        default: "Booked"

    }
},

    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }
);

const BookingModel = mongoose.model('bookings', bookings);
module.exports = BookingModel;