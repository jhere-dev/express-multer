const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "poseidon",
  },
});

module.exports = cloudinaryStorage;
