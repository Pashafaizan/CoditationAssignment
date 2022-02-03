const { product, category } = require("../models/product.model");
exports.GetProductList = async (category) => {
  try {
    const query = category == "all" ? {} : { product_categories: category };
    console.log(query);
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
    const category_ids = data.product_categories.map((v) => {
      return v._id;
    });
    data.product_categories = category_ids;
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
  try {
    let data = await product.findById({ _id: id });
    let categories = await Promise.all(
      data.product_categories.map(async (v) => {
        const c = await category.findById(v);
        return { _id: v, category_name: c.category_name };
      })
    );
    data.product_categories = categories;

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
