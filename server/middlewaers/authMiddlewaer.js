import Jwt  from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignin = async (req,res,next)=>{
  try {
    console.log(req.headers.authorization)
    const decode = Jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
        sucsess:false,
        message:"invalid user"
    });
    
  }
}

//admin acceess
export const isAdmin = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role !== 1){
            res.status(401).send({
                sucsess:false,
                message:"unauthorized acceess",
            });
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            sucsess:false,
            message:"problem with admin middewaer"
        });
    }
}