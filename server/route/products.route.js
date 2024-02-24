const { Router } = require("express");
const productRouter = Router();
const ProductModel = require("../model/products.model");

// GET request to fetch all products
productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = productRouter;
