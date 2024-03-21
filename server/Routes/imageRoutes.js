const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Image = require("../models/Image");

// Set storage engine
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
}).array("images", 6);

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images only!");
  }
}

router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      const imagePaths = req.files.map((file) => file.path);

      const newImage = new Image({ imagePaths });

      newImage
        .save()
        .then((image) => {
          res.json({
            message:
              "Images uploaded and saved successfully under unique ID: " +
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
