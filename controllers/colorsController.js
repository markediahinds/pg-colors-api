// controllers/colorsController.js
const express = require("express");
const colors = express.Router();
const { getAllColors } = require('../queries/colors') // the file is an object to be destructured

// INDEX
colors.get("/", async (req, res) => {
  const allColors = await getAllColors()
  if (allColors[0]) {
    res.status(200).json(allColors)
  } else {
  res.status(500).json({ error: "Internal Service Error" })
  }
});

module.exports = colors;