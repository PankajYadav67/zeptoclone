const { Router } = require("express");
const CartModel = require("../model/cart.model");
const cartRouter = Router();

cartRouter.post("/:username", async (req, res) => {
  try {
    // Check if a cart with the same username or title already exists
    const existingCart = await CartModel.findOne({
      username: req.params.username,
      title: req.body.title,
    });

    if (existingCart) {
      // Cart with the same username,title already exists
      return res.status(401).send({ message: "Cart already exists" });
    }
    // Token check
    if (req.body.token !== 54321) {
      return res.status(401).send({ message: "Invalid token" });
    }

    // cart doesn't exist, proceed with creating a new cart
    const cartInfo = await CartModel(req.body);
    const savedCart = await cartInfo.save();
    res.status(200).send({ message: "Successfully registered", savedCart });
  } catch (error) {
    res.status(500).send("error");
  }
});

cartRouter.get("/:username", async (req, res) => {
  try {
    // Retrieve cart information based on the provided username
    const carts = await CartModel.find({ username: req.params.username });

    // Token check

    if (req.body.token !== 54321) {
      return res.status(401).send({ message: "Invalid token" });
    }

    if (carts.length === 0) {
      // No carts found for the given username
      return res
        .status(404)
        .send({ message: "No carts found for the username" });
    }

    res.status(200).send({ message: "Carts retrieved successfully", carts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

cartRouter.patch("/:username", async (req, res) => {
  try {
    // Token check
    if (req.body.token !== 54321) {
      return res.status(401).send({ message: "Invalid token" });
    }

    // Find the cart based on the provided username and title
    const cart = await CartModel.findOne({
      username: req.params.username,
      $and: [
        {
          title: req.body.title,
        },
      ],
    });

    if (!cart) {
      // Cart not found
      return res.status(404).send({ message: "Cart not found" });
    }

    // Update the totalquantity field with the new value
    cart.totalquantity = req.body.totalquantity;

    // Save the updated cart to the database
    const updatedCart = await cart.save();

    res
      .status(200)
      .send({ message: "Total quantity updated successfully", updatedCart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// empty cart button
cartRouter.delete("/:username", async (req, res) => {
  try {
    // Token check
    if (req.body.token !== 54321) {
      return res.status(401).send({ message: "Invalid token" });
    }

    // Find the cart based on the provided username
    const cart = await CartModel.deleteMany({
      username: req.params.username,
    });

    res
      .status(200)
      .send({ message: "The cart has been successfully emptied.", cart });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = cartRouter;
