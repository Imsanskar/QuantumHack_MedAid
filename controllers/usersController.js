const bcrypt = require('bcrypt');
const { validationResult }=  require('express-validator');
const User = require('../models/users');
const SALT_ROUNDS = 10;

//middlewares and utilities
const extractJWT = require('../middlewares/extract-jwt');

// POST request for creating new user
module.exports.users_post = async function (req, res){
  //variables required for this endpoint
  let currentUser;
  //save the user
  try{
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      throw {
        type: "FORM_ERROR",
        formErrors: validationErrors.array(),
      }
    }

    let hashed = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    currentUser = await new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashed,
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight,
      foodAndWaterStats: [],
      physicalStats: [],
      mentalStats: [],
      medicineRecords: [],
    }).save();

    return res.json({
      message: "User created successfully",
      email: `${currentUser.email}`
    });
  }
  catch(err){
    if ('type' in err && err.type === "FORM_ERROR"){
      return res.status(422).json({
        message: "Error in form",
        errors: err.formErrors,
      });
    }
    return res.status(500).json({
      message: "Internal server error",
      errors: true,
      email: null,
    })
  }
}

// Getting a single user's profile
module.exports.singleUser_get = async function (req, res) {
  let user;
  try{
    /* This route needs authorization, so we extract JWT from cookies */
    extractJWT(req);
    if (req.user_query.id === req.params.id){
      user = await User.findById(req.params.id)
      if (!user){
        throw {
          type: "NOT_FOUND",
          message: "Article not found",
        }
      }
    } else {
      throw {
        type: "UNAUTHORIZED_ACCESS",
        message: "You don't have permission to view this information"
      }
    }

    //filter out appropriate fields to send
    res.json({
      errors: false,
      user,
    });
  }

  catch(x){
    if ('type' in x){
      switch (x.type){
          /* For NOT FOUND error */
        case 'NOT_FOUND':
          return res.status(404).json({
            errors: true,
            message: x.message,
          });
        case 'UNAUTHORIZED_ACCESS':
          /* For unauthorized access */
          return res.status(401).json({
            errors: true,
            message: x.message
          })
      }
    }
    return res.status(500).json({
      message: "Internal server error",
      errors: true,
    });
  }
}
