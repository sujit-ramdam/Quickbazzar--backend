const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "minoprojec" || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: "588678837162278" || process.env.CLOUDINARY_API_KEY,
  api_secret: "xf_oqN3DQ2_yWhC3Siu_GEo2Mhc" || process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
