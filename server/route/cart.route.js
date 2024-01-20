const { Router } = require("express");
const CartModel = require("../model/cart.model");
const cartRouter = Router();

cartRouter.post("/post", async (req, res) => {
  try {
    // // Check if a user with the same username or email already exists
    // const existingCart = await CartModel.findOne({
    //   $or: [
    //     { _id: req.body._id },
    //     { email: req.body.email },
    //     { username: req.body.username },
    //   ],
    //   $and: {
    //     token: 54321,
    //   },
    // });

    // if (existingCart) {
    //   // Cart with the same username, _id and email already exists
    //   return res.status(400).send({ message: "User already exists" });
    // }

    // User doesn't exist, proceed with creating a new user
    const cartInfo = await CartModel(req.body);
    const savedCart = await cartInfo.save();
    res.status(200).send({ message: "Successfully registered", savedCart });
  } catch (error) {
    res.status(500).send("error");
  }
});
