const productService = require("../services/product.service");
exports.AllProducts = (req, res, next) => {
  let { cateogry } = req.query;
  productService
    .GetProductList(cateogry)
    .then((returnData) => {
      res.json(returnData);
    })
    .catch(next);
};
exports.productCreate = async (req, res, next) => {
  const returnData = await productService.createProduct(req.body);
  res.json(returnData);
};
exports.productGetById = async (req, res, next) => {
  const id = req.params.id;
  const returnData = await productService.getProductById(id);
  res.json(returnData);
};
exports.productUpdata = (req, res, next) => {
  const id = req.params.id;
  const data = req.body;

  productService
    .updateProduct(id, data)
    .then((returnData) => {
      res.json(returnData);
    })
    .catch(next);
};
