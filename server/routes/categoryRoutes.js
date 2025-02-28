import express from "express";
import {isAdmin,requireSignin }from './../middlewaers/authMiddlewaer.js'
import {categoryController, createCategoryController,deleteCategorycontroller,singleCategoryController,updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

//cretae new category
router.post("/create-category",requireSignin,isAdmin,createCategoryController);

// update category
router.put('/update-category/:id',requireSignin,isAdmin,updateCategoryController);

//get all category
router.get("/get-category",categoryController);

//get single category 
router.get("/single-category/:slug",singleCategoryController);

//delete category
router.delete("/delete-category/:id",requireSignin,isAdmin,deleteCategorycontroller);  

export default router;

