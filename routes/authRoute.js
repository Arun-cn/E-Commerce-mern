import  express from "express";
import {registerController,loginController} from'../controllers/authController.js';
const routers = express.Router();

routers.post('/register',registerController);
routers.post("/loging",loginController);

export default  routers;