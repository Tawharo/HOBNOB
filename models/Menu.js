const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  menuItemName: {
    type: String,
    required: true,
  },
  MenuType: {
    type: String,
    required: true,
  },
  isSpecial: {
    type: Boolean,
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
    type: String,
    required: true,
  },
  addIngredients: {
    type: String,
    required: false,
  },
  specialPrice: {
    type: String,
    required: false,
  },
  removeIngredients: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;
