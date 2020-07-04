const mongoose = require("mongoose");
const { schema } = require("./User");
const Schema = mongoose.Schema;

const orderDetailSchema = new schema({
  _idUser: {
    type: String,
    required: true,
  },
  menuItemName: {
    type: String,
    required: true,
  },
  menuType: {
    type: String,
    required: true,
  },
  isSpecial:{
    type: Boolean,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  ingredients:{
    type: String,
    required: true,
  },
  price:{
    type: Int16Array,
    required: true,
  },
  addIngredients:{
    type: String,
    required: true,
  },
  specialPrice:{
    type: Int16Array,
    required: true,
  },
  removeIngredients:{
    type: String,
    required: true,
  },
  quantity:{
    type: Int16Array,
    required: true,
  },
  tax:{
    type: Int16Array,
    required: true,
  },
  tip:{
    type: Int16Array,
    required: true,
  },
  grandTotal: {
    type: Int16Array,
    required: true,
  },
});

module.exports = orderDetailSchema;
