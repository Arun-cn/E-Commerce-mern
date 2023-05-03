import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log('connected to mongo db')
    } catch (error) {
        console.log('error to conect mongo db')

    }
}

export default connectDB;