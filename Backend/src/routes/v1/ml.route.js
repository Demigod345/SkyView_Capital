const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');
const mlValidation = require('../../validations/ml.validation');
const mlController = require('../../controllers/ml.controller')
const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'),validate(mlValidation.getUserInput),mlController.getUserInput)

  // .post(auth('manageUsers'), validate(mlValidation.getUserInput), mlController.getPrediction)

router
  .route('/:userId')
  .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;