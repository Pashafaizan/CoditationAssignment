const categotyService = require("../services/category.service")

exports.CategoryCreate = async(req,res,next)=>{
    console.log("faizan pasha");
    console.log(req.body);
    const returnData =await categotyService.createCategory(req.body)
    res.json(returnData);
}

exports.listCategory = async(req,res,next)=>{
    console.log("faizan pasha");
    const returnData =await categotyService.categoryList()
    res.json(returnData);
}

exports.childAndParentCategory = async(req,res,next)=>{
    
    const returnData =await categotyService.chileCateOfParent()
    res.json(returnData);
}
