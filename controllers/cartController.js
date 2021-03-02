const Product = require('../models/Product');
const Buyer = require('./../models/Buyer');
const Seller = require('./../models/Seller');

 var buyerCartItem ={
  id:String,
  price:Number,
  quantity:Number
}

var sellerOrderItem ={
  id:String,
  price:Number,
  quantity:Number,
  shippingInfo:{
    location:String,
    phone:Number
  }
}

exports.addToCart = async(req, res) => {
   const buyer =  await Buyer.findById(req.userId);
   const products = req.body.products;
  //  console.log(products);
   const shippingDetails = req.body.shippingDetails;

      for(i=0; i<products.length; i++){

          buyerCartItem.id = products[i].Id;
          buyerCartItem.price = products[i].price;
          buyerCartItem.quantity = products[i].qty;
          buyer.cart.push(buyerCartItem);

          const product = await Product.findById(products[i].Id);
          // console.log(product.seller);
          const seller = await Seller.findById(product.seller);


          // console.log("seller is: "+seller);
          sellerOrderItem.id = products[i].Id;
          sellerOrderItem.price = products[i].price;
          sellerOrderItem.quantity = products[i].qty;
          sellerOrderItem.shippingInfo.location = shippingDetails.shippingAddress;
          sellerOrderItem.shippingInfo.phone = shippingDetails.phone;

          // console.log("location is"+sellerOrderItem.shippingInfo.phone );
          // console.log("location is"+sellerOrderItem.shippingInfo.location );

          // console.log("seller order item is"+ sellerOrderItem);
          // console.log(sellerOrderItem);

          seller.orders.push(sellerOrderItem);
          await seller.save();
}

buyer.shippingInfo.location = shippingDetails.shippingAddress;
buyer.shippingInfo.phone = shippingDetails.phone;

await buyer.save();

}

