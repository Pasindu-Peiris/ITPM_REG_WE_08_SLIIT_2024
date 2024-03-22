const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Image = require("../models/Image");


const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});


const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).fields([
  { name: "images", maxCount: 6 },
  { name: "music", maxCount: 1 },
]); 


function checkFileType(file, cb) {
  const imageFiletypes = /jpeg|jpg|png|gif/;
  const musicFiletypes = /mp3/;
  const extname = path.extname(file.originalname).toLowerCase();
  const isImage = imageFiletypes.test(extname);
  const isMusic = musicFiletypes.test(extname);
  if (isImage || isMusic) {
    return cb(null, true);
  } else {
    cb("Error: Images and MP3 files only!");
  }
}


router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      const imagePaths = req.files["images"].map((file) => file.path);
      const musicPath = req.files["music"] ? req.files["music"][0].path : null;

      const newImage = new Image({ imagePaths, musicPath });

 
      newImage
        .save()
        .then((image) => {
          res.json({
            message:
              "Images and music uploaded and saved successfully under unique ID: " +
              image._id,
          });
        })
        .catch((err) => {
          res.status(500).json({ error: "Failed to save images to database" });
        });
    }
  });
});

module.exports = router;
