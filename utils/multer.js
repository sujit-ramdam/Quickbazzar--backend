const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, path, cb) => {
    console.log(req);
    // let ext = path.extname(path.originalname);  
    // if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    //   cb(new Error("File type is not supported"), false);
    //   return;
    // }
    cb(null, true);
  },
});