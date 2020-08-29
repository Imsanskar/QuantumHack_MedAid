const express = require('express');
const router = express.Router();

// Controller import
const usersController = require("../controllers/usersController");
const userControllerMiddlewares = require("../middlewares/userMiddlewares");

// CREATING A NEW USER
router.post("/",
  userControllerMiddlewares.validate_user_post,
  usersController.users_post);

// GET a specific user
router.get("/:id",usersController.singleUser_get);

//PUT (update) the user information
router.put('/:id',
  userControllerMiddlewares.validate_single_put,
  usersController.singleUser_put);

router.put('/:id/foodAndWaterStats', 
  userControllerMiddlewares.validate_foodAndWater,
  usersController.singleUser_foodAndWater);

router.put('/:id/foodAndWaterTodo', 
  userControllerMiddlewares.validate_foodAndWaterTodo,
  usersController.singleUser_foodAndWaterTodo);
module.exports = router;
