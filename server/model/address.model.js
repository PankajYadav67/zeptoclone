const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  addressLine: {
    type: String,
    required: true,
  },
});

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
