const Product = require('./../models/Product');
const Seller = require('../models/Seller');

const cloudinary = require('../utils/cloudinary');


exports.createProduct = async (req, res) =>{
    console.log("hello creating..");
       // Upload image to cloudinary
    //    console.log(req);
    //    const result = await cloudinary.uploader.upload(req.file.path);
try {
  
    const result = await cloudinary.uploader.upload(req.file.path);
    const product = new Product({
    ...req.body,
    seller:req.userId,
    image: result.secure_url,
    cloudinary_id: result.public_id,
})
await product.save();

const sellerById = await Seller.findById(req.userId);
sellerById.products.push(product);
await sellerById.save();
} catch (error) {
    console.log(error)
}

     
}

exports.getAllProductsBySellerId = async (req,res) => {
    const productsBySeller = await Product.find({
        seller: req.userId
    }).exec();

    res.send(productsBySeller);
}

exports.updateProduct = async (req, res) => {
    // console.log("updating"+ req.body._id);
     await Product.findByIdAndUpdate(req.body._id, req.body).exec();
}

exports.getAllOrdersForSeller = async(req, res) => {
    const seller = await Seller.findById(req.userId);
    res.send(seller.orders);

}