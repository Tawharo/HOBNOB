const mongoose = require("mongoose");
//const user = require("../models/User");
const Schema = mongoose.Schema;

const orderDetailSchema = new Schema({
  _idUser: {
    type: String,
    required: false,
  },
  menuItemName: {
    type: String,
    required: false,
  },
  menuType: {
    type: String,
    required: false,
  },
  isSpecial: {
    type: Boolean,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  ingredients: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  addIngredients: {
    type: String,
    required: false,
  },
  specialPrice: {
    type: Number,
    required: false,
  },
  removeIngredients: {
    type: String,
    required: false,
  },
  quantity: {
    type: Number,
    required: false,
  },
  tax: {
    type: Number,
    required: false,
  },
  tip: {
    type: Number,
    required: false,
  },
  grandTotal: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model("orderDetailSchema", orderDetailSchema);
module.exports = Order;
