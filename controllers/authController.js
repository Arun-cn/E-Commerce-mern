import   usermodel from  '../models/userModel.js';
import {haspassword , comparePassword} from '../helper/authHelper.js';
import  Jwt  from "jsonwebtoken";

export const registerController = async(req,res)=>{
      try {
        const {email,name,phone,password,address} = req.body;
        //validations
        if(!name){
            res.send({error:'name is requied'});
        }
        if(!email){
            res.send({error:'email is requied'});
        }
        if(!password){
            res.send({error:'password is requied'});
        }
        if(!phone){
            res.send({error:'phone is requied'});
        }
        if(!address){
            res.send({
                error:'address is required'
            })
        }
        //checkuser
        const existingUser = await usermodel.findOne({email});
        //existing user
        if (existingUser){
            res.status(200).send({
                success:true,
                message:"already exisit please login"
            })
        }
        //hashpassword
        const hasedpasword = await haspassword(password);
        //save user
        const user = await new usermodel({email,name,phone,address,password:hasedpasword}).save();
        res.status(200).send({
            succecs:true,
            message:"user registed succes full",
            user
        });

      } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            masage:'error in message',
            error
        })
      }
};

export const loginController =async (req,res)=>{
  try {
    const {email,password}= req.body;
    if(!email || !password ){
        res.status(404).send({
            succecs:false,
            message:"invalid email and password"
            
        })
    }
    const user = await usermodel.findOne({email})
    if(!user){
        return res.status(404).send({
            succecs:false,
            message:"user not found"
            
        })
    }
    const match = await comparePassword(password,user.password);
    if(!match){
        return res.status(200).send({
            succecs:false,
            message:"password is invaild"
            
        })

    }
    const options = {
        expiresIn: '1h'
      };
    const token = await Jwt.sign({_id : user._id},process.env.JWT_SECRET,options)  ;
    

    res.status(200).send({
        succecs:true,
        message:"login seccessfully",
        user : {
            name: user.name,
            email : user.email,
            phone : user.phone,
            address : user.address
        },
        token

    });
    
  } catch (error) {
    console.log(error);
    res.status('500').send({
        success:false,
        masage:'error in login',
        error
    })
  }


}

