const mongoose = require('mongoose');

const users = new mongoose.Schema(
    {
      username: {
        type: String,
        unique: true,
        required: [true, 'Required field'],
      },
      password: {
        type: String,
        required: [true, 'Required field'],
      },
      mailId: {
        type: String,
        required: [true, 'Required field'],
      },
      phoneNumber: {
        type:Number,
        required: [true, 'Required field'],
      },
    },
    {
      timestamps: {
        createdAt: true,
        updatedAt: true,
      },
    }
  );
  //Model
  const UserModel = mongoose.model('users', users);
  module.exports = UserModel;