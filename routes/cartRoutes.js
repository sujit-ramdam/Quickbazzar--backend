const express = require('express');
const router = express.Router();

const {getUserId} = require('./../middlewares/getUserId');
const cartController = require('./../controllers/cartController');

 router
  .route ('/')
  .post(getUserId, cartController.addToCart);

//  router
//   .route ('/seller')
//   .post(cartController.addCartToSeller);

module.exports = router;