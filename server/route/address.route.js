const express = require("express");
const addressRouter = express.Router();
const addressModel = require("../models/address.model");

addressRouter.post("/save", async (req, res) => {

  try {
    const existingUser = await addressModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
      // User with the same username or email already exists
      return res.status(400).send({ message: "User already exists" });
    }

    // User doesn't exist, proceed with creating a new user
    const creds = await addressModel(req.body);
    const savedCreds = await creds.save();

    res.status(201).send({ message: "Address saved successfully", savedCreds });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET request to fetch all address -> admin

addressRouter.get("/", async (req, res) => {
  try {
    const adds = await addressModel.find();
    res.status(200).json(adds);
  } catch (error) {
    console.error("Error fetching adds:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = addressRouter;
