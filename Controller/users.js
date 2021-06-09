const UserModel = require('../Model/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = async (req, res) => {
  let mailId = req.body.email
  let password = req.body.password
  try {
    const user = await UserModel.findOne({mailId}, { _id: 0, __v: 0,});
    if (user) {
      let passwordIsValid = await bcrypt.compare(password, user.password);
      var token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
      })
     if(passwordIsValid){
       res.status(200).json({ 
           token,
         username: user.username,
         mailId: user.mailId,
         phoneNumber:user.phoneNumber,
       })
     }
     else{
      res.status(401).send({token: null, message: 'Invalid password'});
     }
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No User available in the repo',
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
exports.register = async (req, res) => {
  let password = req.body.password;
  let hashedPassword = await bcrypt.hash(password,10);
  try {
    if (req.body.username) {
      const newUser = await UserModel.create(
        {
          username: req.body.username,
          mailId: req.body.mailId,
          phoneNumber: req.body.phoneNumber,
          password: hashedPassword
        }
      );
      var token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(201).json({
        status: 'success',
        token,
        username:newUser.username,
        mailId:newUser.mailId,
        phoneNumber:newUser.phoneNumber,
      });
    } else {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid name',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
// exports.updateUser = async (req, res) => {
//   try {
//     const User = await UserModel.findOneAndUpdate(
//       { username: req.params.id },
//       req.body,
//       {
//         new: true, //to return new doc back
//         runValidators: false, //to run the validators which specified in the model
//       }
//     );
//     if (User != null) {
//       res.status(200).json({
//         status: 'success',
//         data: {
//           User,
//         },
//       });
//     } else {
//       res.status(400).json({
//         status: 'success',
//         data: {
//           message: `No User available with ID ${req.params.id} `,
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



// exports.deleteUser = async (req, res) => {
//   const delDet = await UserModel.deleteOne({ username: req.params.id });
//   if (delDet.deletedCount === 0) {
//     res.status(404).json({
//       status: 'fail',
//       message: 'No User available for this ID',
//     });
//   } else {
//     res.status(200).json({
//       status: 'success',
//       message: `User with ${req.params.id} ID deleted`,
//     });
//   }
// };
