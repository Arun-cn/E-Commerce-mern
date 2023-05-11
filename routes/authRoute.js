import  express from "express";
import {registerController,loginController} from'../controllers/authController.js';
import { testController } from "../controllers/testController.js";
import { requireSignin,isAdmin } from "../middlewaers/authMiddlewaer.js";
const routers = express.Router();

routers.post('/register',registerController);
//login route
routers.post("/loging",loginController);

//test route
routers.get('/test',requireSignin,isAdmin, testController);

export default  routers;