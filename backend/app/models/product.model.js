const { Decimal128, ObjectId } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  product_color: {
    type: String,
  },
  product_categories: [],
  brand: { type: String },
});

const categorySchema = new Schema({
  category_name: {
    type: String,
  },
  parent_id: mongoose.Schema.Types.ObjectId,
});
const product = mongoose.model("product", productSchema);
const category = mongoose.model("productCatrgory", categorySchema);
module.exports = {
  product,
  category,
};
