const mongoose = require('mongoose');
const { customAlphabet } = require('nanoid');

const alphabet = '123456789ABCDEFGH'; //this can be done in .env file to change at later point of time
const nanoid = customAlphabet(alphabet, 6);

const queries = mongoose.Schema({
    queryId: {
        type: String,
        unique: true,
        default: () => nanoid(),

    },
    emailId: {
        type: String,
        required: [true, 'Required field'],
    },
    from: {
        type: String,
        required: [true, 'Required field'],
    },
    to: {
        type: String,
        required: [true, 'Required field'],
    },
    weight: {
        type: String,
        required: [true, 'Required field'],
    },
    height: {
        type: String,
        required: [true, 'Required field']
    },
    width: {
        type: String,
        required: [true, 'Required field']
    },
    length: {
        type: String,
        required: [true, 'Required field']
    },
    Status: {
        type: String,
        default: "Queued"
    }
},

    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    }

);

const QueryModel = mongoose.model('queries', queries);
module.exports = QueryModel;