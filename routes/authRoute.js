import  express from "express";
import {registerController} from'../controllers/authController.js';
const routers = express.Router();

routers.post('/register',registerController);

export default  routers;