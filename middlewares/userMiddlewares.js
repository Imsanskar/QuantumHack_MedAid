const {check} =  require("express-validator");
const User = require('../models/users');

// Validation steps for creating new user
module.exports.validate_user_post = [
  check('firstname').exists().trim().isAlpha().isLength({ min: 3 }),
  check('lastname').exists().trim().isAlpha().isLength({ min: 3 }),
  check('email').exists().trim().isEmail(),
  check('password').exists().isLength({ min: 8 }).escape(),
  check('age').exists().isNumeric(),
  check('height').exists().isNumeric(),
  check('weight').exists().isNumeric(),
  check('gender').exists(),
  // Check if email already exists
  check('email').custom(async value => {
    return User.findOne({ email: value }).then(user => {
      if (user) {
        throw new Error("Email already in use");
      }
    });
  }),
];

// Editing user information
module.exports.validate_single_put = [
  check('age').exists().isNumeric(),
  check('height').exists().isNumeric(),
  check('weight').exists().isNumeric(),
]

//Updating food and water stats
module.exports.validate_foodAndWater = [
  check('food').exists().isNumeric(),
  check('water').exists().isNumeric()
]

module.exports.validate_foodAndWaterTodo = [
  check('title').exists().isString(),
  check('detail').exists().isString()
]
