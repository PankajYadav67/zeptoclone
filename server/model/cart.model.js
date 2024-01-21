const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    username :{type:String},
    title:{type:String},
    quantity:{type:String},
    image:{type:String},
    totalquantity:{type:Number},
    price:{type:String}
})

const CartModel = mongoose.model("cart",cartSchema);

module.exports = CartModel;