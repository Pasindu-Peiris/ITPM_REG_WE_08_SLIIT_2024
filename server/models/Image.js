const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  imagePaths: [
    {
      type: String,
      required: true,
    },
  ],
  musicPath: {
    type: String,
  },
  title: {
    type:String,
  }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
