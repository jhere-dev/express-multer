const express = require("express");
const multer = require("../middlewares/multer");

const router = express.Router();

router.put("/:id", multer.single("batman"), async (req, res) => {
  try {
    res.status(200).json(req.file);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
