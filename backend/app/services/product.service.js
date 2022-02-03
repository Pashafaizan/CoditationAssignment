const { product, category } = require("../models/product.model");

exports.GetProductList = async (category) => {
  try {
    const query = category == null ? {} : {product_categories:category};
    let data = await product.find(query);
    if (data) {
      return {
        data,
        success: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createProduct = async (data) => {
  try {
    const productData = await new product(data);
    await productData.save();

    return {
      message: "successfully created data",
      success: true,
    };
  } catch (error) {
    console.log(error);
  }
};
exports.getProductById = async (id) => {
  console.log(id);
  try {
    let data = await product.findById({ _id: id });
    let categories = await Promise.all(data.product_categories.map(async(v)=>{
        const c = await category.findById(v);
        return {_id:v,category_name: c.category_name}
    }))
    data.product_categories = categories;
    console.log(data);
    if (data) {
      return {
        data,
        success: true,
      };
    }
  } catch (err) {
    console.log(err);
  }
};
exports.updateProduct = async (id, productData) => {
  try {
      console.log(productData, "FAIZAN")
    let data = await product.findByIdAndUpdate(
      id,
      { ...productData },
      { new: true }
    );
    if (data) {
      return {
        message: "successfully updated",
        success: true,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
