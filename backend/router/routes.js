const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/product.controller")
const categoryController = require("../app/controllers/category.controller")
router.get('/products',productController.AllProducts);
router.post('/create/product',productController.productCreate);
router.post('/update/product/:id',productController.productUpdata);
router.get('/product/:id',productController.productGetById)
router.get('/list/categories',categoryController.listCategory)
router.get('/list/childandparent',categoryController.childAndParentCategory)
router.post('/add/category',categoryController.CategoryCreate)




module.exports = router;