import bcrypt from 'bcrypt';


export const haspassword = async (password)=>{
    try {
        const saltRound = 10;
        const hasedPassword = await bcrypt.hash(password ,saltRound);
        return hasedPassword;
    } catch (e) {
        console.log(e)
    }
}

export const comparePassword = async (password,hasedPassword)=>{
 return bcrypt.compare(password,hasedPassword);
}