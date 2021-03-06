const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var orderSchema = new Schema({
  ownerId: {
    type: String,
  },
  customerId: {
    type: String,
  },
  orderId: {
    type: String,
  },
  date: {
    type: String,
  },
  buisnessname: {
    type: String,
  },
  totalprice: {
    type: String,
  },
  orderStatus: {
    type: String,
  },
  delivery_address: {
    type: String,
  },
  items: [
    {
      itemId: {
        type: String,
      },
      itemName: {
        type: String,
      },
      unitprice: {
        type: String,
      },
      quantity: {
        type: String,
      },
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
