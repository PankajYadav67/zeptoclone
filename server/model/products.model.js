const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String },
  quantity: { type: String },
  image: { type: String },
  totalquantity: { type: Number },
  price: { type: String },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
