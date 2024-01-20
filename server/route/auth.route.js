const { Router } = require("express");
const UserModel = require("../model/auth.model");
const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  try {
    // Check if a user with the same username or email already exists
    const existingUser = await UserModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
      // User with the same username or email already exists
      return res.status(400).send({ message: "User already exists" });
    }

    // User doesn't exist, proceed with creating a new user
    const creds = await UserModel(req.body);
    const savedCreds = await creds.save();
    res.status(200).send({ message: "Successfully registered", savedCreds });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Error, please try again" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    // const { username, email,password } = req.body;

    const verifyUser = await UserModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
      $and: [{ password: req.body.password }],
    });

    if (verifyUser) {
      // User found, generate payload and send response
      let { username, _id } = verifyUser;
      let payload = {
        username,
        _id,
        "token" : 54321
      };
      res.send({ payload });
    } else {
      // User not found
      res.status(401).send({ message: "Wrong credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Error during login, please try again" });
  }
});

module.exports = authRouter;
