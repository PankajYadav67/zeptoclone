const { Router } = require("express");
const CartModel = require("../model/cart.model");
const cartRouter = Router();

// Middleware for token check
const checkToken = (req, res, next) => {
  if (req.body.token != 54321) {
    return res.status(401).send({ message: "Invalid token" });
  }
  next();
};

// Middleware for cart validation (if needed)
const validateCart = (req, res, next) => {
  // Add validation logic here if necessary
  next();
};

cartRouter.post("/:username", checkToken, validateCart, async (req, res) => {
  try {
    const existingCart = await CartModel.findOne({
      username: req.params.username,
      title: req.body.title,
    });

    if (existingCart) {
      return res.status(401).send({ message: "Cart already exists" });
    }

    const cartInfo = await CartModel(req.body);
    const savedCart = await cartInfo.save();

    res.status(200).send({ data: savedCart, message: "Successfully registered" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

cartRouter.get("/:username", async (req, res) => {
  try {
    const carts = await CartModel.find({ username: req.params.username });

    if (carts.length === 0) {
      return res.status(404).send({ message: "No carts found for the username" });
    }

    res.status(200).send({ data: { carts }, message: "Carts retrieved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

cartRouter.patch("/:username", checkToken, async (req, res) => {
  try {
    const cart = await CartModel.findOneAndUpdate(
      { username: req.params.username, title: req.body.title },
      { totalquantity: req.body.totalquantity },
      { new: true } 
    );

    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }

    res.status(200).send({ data: { updatedCart: cart }, message: "Total quantity updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// empty card
cartRouter.delete("/:username/empty", async (req, res) => {
  try {
    const cart = await CartModel.deleteMany({ username: req.params.username });

    res.status(200).send({ data: { cart }, message: "The cart has been successfully emptied." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


// removing one item from the cart
cartRouter.delete("/:username/:id", async (req, res) => {
  try {
    const cart = await CartModel.deleteOne({ username: req.params.username, _id: req.params.id });

    if (cart.deletedCount === 0) {
      return res.status(404).send({ message: "Item not found in the cart" });
    }

    res.status(200).send({ data: { cart }, message: "One item removed from the cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = cartRouter;
