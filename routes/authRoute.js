import  express from "express";
import {registerController,loginController,forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from'../controllers/authController.js';
import { testController } from "../controllers/testController.js";
import { requireSignin,isAdmin } from "../middlewaers/authMiddlewaer.js";
const routers = express.Router();

routers.post('/register',registerController);
//login route
routers.post("/loging",loginController);

//forgotPasswordController

routers.post("/forgot-password",forgotPasswordController);

//test route
routers.get('/test',requireSignin,isAdmin, testController);

//protected user route auth
routers.get("/user-auth",requireSignin,(req,res)=>{
    res.status(200).send({ok:true})
});

//protected admin route auth
routers.get("/admin-auth",requireSignin,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
});

//update profile
routers.put("/profile", requireSignin, updateProfileController);

//orders
routers.get("/orders", requireSignin, getOrdersController);

//all orders
routers.get("/all-orders", requireSignin, isAdmin, getAllOrdersController);

// order status update
routers.put(
  "/order-status/:orderId",
  requireSignin,
  isAdmin,
  orderStatusController
);

export default  routers;