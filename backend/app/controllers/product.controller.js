const productService = require("../services/product.service")

exports.AllProducts = (req,res,next)=>{
   
      productService.GetProductList().then((returnData)=>{
          res.json(returnData)
      }).catch(next)
}

exports.productCreate = async(req,res,next)=>{
    console.log("faizan pasha");
    console.log(req.body);
    const returnData =await productService.createProduct(req.body)
    res.json(returnData);
}
exports.productGetById = async (req,res,next)=>{
    const id = req.params.id;
    const returnData =await productService.getProductById(id);
    res.json(returnData);
}

exports.productUpdata = (req,res,next)=>{
    const id = req.params.id;
    const data = req.body;
    console.log(data);
    productService.updateProduct(id,data).then((returnData)=>{
        res.json(returnData)
    }).catch(next)
}

