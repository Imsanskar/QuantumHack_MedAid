// REQUIRE PACKAGES
const {validationResult} = require('express-validator');
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login_post = async (req, res) => {
  // form data error
  const validation_errors = validationResult(req);
  let currentUser;

  try{

    if (!validation_errors.isEmpty()){
      //Bad request error
      throw {
        type: "FORM_ERROR",
        message: "Error in form",
      };
    }

    currentUser = await User.findOne({
      email: req.body.email
    });

    //if not users found
    if (!currentUser){
      throw {
        type: "NOT_FOUND",
        message: "Credentials do not match",
      }
    }

    //bcrypt compare
    let didMatch = await bcrypt.compare(req.body.password, currentUser.password);

    if (!didMatch){
      throw {
        type: "NO_MATCH",
        message: "Credentials did not match",
      }
    }

    //if password matched
    let payload = {
      id: currentUser._id,
    };

    let token = jwt.sign(
      payload, process.env.ACCESS_TOKEN,
      {expiresIn: '14d'});

    token = "Bearer " + token;


    res.json({
      id: currentUser._id,
      errors: null,
      body: "Login permission granted",
      authorization: token
    });
  }
  catch(e){
    if ('type' in e){
      switch (e.type){
        case 'NO_MATCH':
        case "NOT_FOUND":
          return res.status(401).json({
            errors: true,
            message: e.message,
          });
        case 'FORM_ERROR':
          return es.status(422).json({
            errors: true,
            message: e.message,
          });
      }
    } else {
      return res.status(500).json({
        errors: true,
        message: "Internal server error"
      });
    }
  }
}

