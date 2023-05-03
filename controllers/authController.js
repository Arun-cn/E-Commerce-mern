import usermodel from ('userModel');
import {hashpasword} from ('../helper/authHelper.js')
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
        const hasedpasword = await hashpasword(password);
        //save user
        const user = await new usermodel({email,name,phone,address,password:hasedpasword}).save();
        res.status(200).send({
            succecs:true,
            message:"user registed succes full",
            user
        });

      } catch (error) {
        console.log(error);
        res.status('500').send({
            success:false,
            masage:'error in message',
            error
        })
      }
};

