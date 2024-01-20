const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    title:{type:String},
    quantity:{type:Number},
    image:{type:String},
    totalquantity:{type:Number},
    price:{type:String},
})

const CartModel = mongoose.model("cart",cartSchema);

module.exports = CartModel;