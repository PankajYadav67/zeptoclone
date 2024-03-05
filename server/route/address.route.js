const express = require("express");
const addressRouter = express.Router();
const addressModel = require("../models/address.model");

router.post("/save", async (req, res) => {
  const { addressLine } = req.body;

  try {
    const newAddress = new addressModel({ addressLine });
    await newAddress.save();

    res.status(201).json({ message: "Address saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = addressRouter;
