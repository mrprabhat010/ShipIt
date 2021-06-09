const mongoose = require('mongoose');

const services = new mongoose.Schema(
    {
      id: {
        type: Number,
        unique: true,
        required: [true, 'Required field'],
      },
      serviceName: {
        type: String,
        required: [true, 'Required field'],
      },
      description: {
        type: String,
        required: [true, 'Required field'],
      },
      discount: {
        type:Number,
        required: [true, 'Required field'],
      },
      parcelCharges: {
        type: String,
        required: [true, 'Required field'],
      },
      parcelSize: {
        type: String,
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
  const ServiceModel = mongoose.model('services', services);
  module.exports = ServiceModel;