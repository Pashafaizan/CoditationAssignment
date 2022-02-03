const categotyService = require("../services/category.service");

exports.CategoryCreate = async (req, res, next) => {
  const returnData = await categotyService.createCategory(req.body);
  res.json(returnData);
};

exports.listCategory = async (req, res, next) => {
  const returnData = await categotyService.categoryList();
  res.json(returnData);
};

exports.childAndParentCategory = async (req, res, next) => {
  const returnData = await categotyService.chileCateOfParent();
  res.json(returnData);
};
