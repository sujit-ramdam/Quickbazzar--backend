const express = require('express');
const router = express.Router();
const {getUserId} = require('./../middlewares/getUserId');

const upload = require("../utils/multer");

const sellerController = require('./../controllers/sellerController');

router
   .route('/products')
   .get(getUserId, sellerController.getAllProductsBySellerId)
   .post(getUserId,upload.single("file"), sellerController.createProduct)
   .put(getUserId, sellerController.updateProduct);

router
   .route('/orders')
   .get(getUserId, sellerController.getAllOrdersForSeller);

   module.exports = router;