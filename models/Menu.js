const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menuItemName: {
    type: String,
    required: true,
  },
  type: {
    type: Boolean,
    required: true,
  },
  isSpecial: {
    bool: false,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  addIngredients: {
    type: String,
    required: true,
  },
  specialPrice: {
    type: Number,
    required: true,
  },
  removeIngredients: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const menu = mongoose.model("Newmenu", menuSchema);
module.exports = menu;
