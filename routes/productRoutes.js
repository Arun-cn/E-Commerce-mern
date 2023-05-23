import express from "express";
import { createProductController,productPhotoController ,getProductController,getSingleProductController, deleteProductController, updateProductController } from "../controllers/productController.js";
import { isAdmin, requireSignin } from "../middlewaers/authMiddlewaer.js";
import formidable from "express-formidable";

const router = express();
//routes
router.post('/create-product',
    requireSignin, 
    isAdmin ,
    formidable(), 
    createProductController);

//update product
router.put("/update-product/:pid",
    requireSignin,
    isAdmin,
    formidable(),
    updateProductController
  );

router.get('/get-product',getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
export default router;