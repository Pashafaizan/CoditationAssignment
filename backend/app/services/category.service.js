const { category } = require("../models/product.model");
const ObjectId = require('mongodb').ObjectId;
exports.createCategory = async (data) => {
   try {
    const categoryData = await new category(data);  
    await categoryData.save();
    return {
      message: "successfully created caategory",
      success: true,
    };
  } catch (error) {
    console.log(error);
  }
};

exports.categoryList = async () => {
  try {
    let data = await category.find();
    if (data) {
      return {
        data,
        success: true,
      };
    }
    return {
      failure: false,
    };
  } catch (error) {}
};

exports.chileCateOfParent = async () => {
  try {
 
    let data = await category.find({});
    data = await Promise.all(data.map(async child => {
      const childCategories = await category.find({parent_id: ObjectId(child._id)},{category_name:1})
      return {id:child._id,name:child.category_name,childCategories}
  }))
    
return {
  data,
  success:true
};
 } catch (error) {
    console.log(error);
  }
};

