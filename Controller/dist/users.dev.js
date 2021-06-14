"use strict";

var UserModel = require('../Model/userSchema');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

exports.login = function _callee(req, res) {
  var mailId, password, user, passwordIsValid, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mailId = req.body.email;
          password = req.body.password;
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(UserModel.findOne({
            mailId: mailId
          }, {
            _id: 0,
            __v: 0
          }));

        case 5:
          user = _context.sent;

          if (!user) {
            _context.next = 14;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          passwordIsValid = _context.sent;
          token = jwt.sign({
            id: user._id
          }, process.env.SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours

          });

          if (passwordIsValid) {
            res.status(200).json({
              token: token,
              username: user.username,
              mailId: user.mailId,
              phoneNumber: user.phoneNumber
            });
          } else {
            res.status(401).send({
              token: null,
              message: 'Invalid password'
            });
          }

          _context.next = 15;
          break;

        case 14:
          res.status(400).json({
            status: 'success',
            data: {
              message: 'No User available in the repo'
            }
          });

        case 15:
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](2);
          res.status(404).json({
            status: 'fail',
            message: _context.t0
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 17]]);
};

exports.register = function _callee2(req, res) {
  var password, hashedPassword, newUser, token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          password = req.body.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 3:
          hashedPassword = _context2.sent;
          _context2.prev = 4;

          if (!req.body.username) {
            _context2.next = 13;
            break;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap(UserModel.create({
            username: req.body.username,
            mailId: req.body.mailId,
            phoneNumber: req.body.phoneNumber,
            password: hashedPassword
          }));

        case 8:
          newUser = _context2.sent;
          token = jwt.sign({
            id: newUser._id
          }, process.env.SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours

          });
          res.status(201).json({
            status: 'success',
            token: token,
            username: newUser.username,
            mailId: newUser.mailId,
            phoneNumber: newUser.phoneNumber
          });
          _context2.next = 14;
          break;

        case 13:
          res.status(400).json({
            status: 'error',
            results: 'Enter valid name'
          });

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](4);
          res.status(404).json({
            status: 'fail',
            message: _context2.t0
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 16]]);
}; // exports.updateUser = async (req, res) => {
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