import   usermodel from  '../models/userModel.js';
import {haspassword , comparePassword} from '../helper/authHelper.js';
import  Jwt  from "jsonwebtoken";
import userModel from '../models/userModel.js';


export const registerController = async(req,res)=>{
      try {
        const {email,name,phone,password,address,answer} = req.body;
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
        if(!answer){
            res.send({
                error:'answer is required'
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
        const user = await new usermodel({email,name,phone,address,password:hasedpasword,answer}).save();
        res.status(200).send({
            success:true,
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
            success:false,
            message:"invalid email and password"
            
        })
    }
    const user = await usermodel.findOne({email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:"user not found"
            
        })
    }
    const match = await comparePassword(password,user.password);
    if(!match){
        return res.status(200).send({
            success:false,
            message:"password is invaild"
            
        })

    }
    const options = {
        expiresIn: '1h'
      };
    const token = await Jwt.sign({_id : user._id},process.env.JWT_SECRET,options)  ;
    

    res.status(200).send({
        success:true,
        message:"login seccessfully",
        user : {
            name: user.name,
            email : user.email,
            phone : user.phone,
            address : user.address,
            role : user.role
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

//forgot password controller

export const forgotPasswordController = async(req,res)=>{
   try {
    const {email,answer,newPassword} = req.body;
    if(!email){
        res.status(400).send({error:'email is requied'});
    }
    if(!answer){
        res.status(400).send({error:'answer is requied'});
    }
    if(!newPassword){
        res.status(400).send({error:'new password is requied'});
    }
    //check
    const user = await userModel.findOne({email,answer})
    //validation
    if(!user){
        return res.status('500').send({
            success:false,
            masage:'wrong Email and answer',
            
        })
    }
    const hashed = await haspassword(newPassword);
    await usermodel.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
        success: true ,
        message:"passworad rest successfully",
    })
   } catch (error) {
    console.log(error);
    res.status('500').send({
        success:false,
        masage:'error in reseting password',
        error
    })
    
   }

}

