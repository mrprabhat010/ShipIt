const BookingModel = require('../Model/bookingSchema');
const jwt = require('jsonwebtoken');

exports.getBookings = async (req, res) => {
  let token =  req.headers.authorization.split(' ')[1];
  // let token =  req.headers['x-access-token']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  });
  
  try {
    const data = await BookingModel.find({ senderName:req.query.user}, { _id: 0, __v: 0 });
    if (data.length > 0) {
      res.status(200).json({
        data,
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No Booking available in the repo',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.newBooking = async (req, res) => {
  let token =  req.headers.authorization.split(' ')[1];
  // let token =  req.headers['authorization'].split(' ')[1];
  // let token =  req.headers['x-access-token'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  });

  try {
    if (req.body.senderName) {                                     // need to improve a bit 
      const newBooking = await BookingModel.create(req.body);
      res.status(201).json({
        status: 'success',
        newBooking,
      });
    } else {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid name',
      });
    }
  } catch (err) {
    res.status(406).json({
      status: 'failing',
      message: err,
    });
  }
};
// will add this feature later to update date and names
// exports.updateBooking = async (req, res) => {
//   try {
//     const Booking = await BookingModel.findOneAndUpdate(
//       { bookingId: req.params.id },
//       req.body,
//       {
//         new: true, //to return new doc back
//         runValidators: false, //to run the validators which specified in the model
//       }
//     );
//     if (Booking != null) {
//       res.status(200).json({
//         status: 'success',
//         Booking,
//       });
//     } else {
//       res.status(400).json({
//         status: 'success',
//         data: {
//           message: `No Booking available with ID ${req.params.id} `,
//         },
//       });
//     }
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };
exports.deleteBooking = async (req, res) => {
  const delDet = await BookingModel.deleteOne({ bookingId: req.params.id });
  if (delDet.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No Booking available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `Booking with ${req.params.id} ID deleted`,
    });
  }
};
exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};
